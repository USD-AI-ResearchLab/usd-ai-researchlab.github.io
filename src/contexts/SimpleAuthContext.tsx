import React, { createContext, useState, useEffect } from 'react';
import {
  loginUser,
  registerUser,
  checkUser,
  NeedsRegistrationError,
  type AuthResult,
} from '../services/blogDatabase';

// User type for the app
export interface SimpleUser {
  id: number;
  email: string;
  displayName: string;
  role: 'admin' | 'reviewer' | 'author';
  isReviewer: boolean;
  isAdmin: boolean;
}

export interface AuthContextType {
  currentUser: SimpleUser | null;
  loading: boolean;
  isReviewer: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, hint: string) => Promise<void>;
  logout: () => void;
}

const SESSION_KEY = 'usd_ai_blog_session';

const AuthContext = createContext<AuthContextType | null>(null);

const toSimpleUser = (user: AuthResult): SimpleUser => ({
  id: user.id,
  email: user.email,
  displayName: user.name,
  role: user.role,
  isReviewer: user.isReviewer,
  isAdmin: user.isAdmin,
});

export const SimpleAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<SimpleUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session on mount
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const saved = localStorage.getItem(SESSION_KEY);
        if (saved) {
          const { email, password } = JSON.parse(saved);
          if (email && password) {
            const user = await loginUser(email, password);
            setCurrentUser(toSimpleUser(user));
          } else if (email) {
            // Old session without password — check if user still needs registration
            const status = await checkUser(email);
            if (status.exists && !status.needsRegistration) {
              // Can't auto-login without password, clear session
              localStorage.removeItem(SESSION_KEY);
            } else {
              localStorage.removeItem(SESSION_KEY);
            }
          }
        }
      } catch (err) {
        // If NeedsRegistrationError or any other error, clear session
        if (err instanceof NeedsRegistrationError) {
          localStorage.removeItem(SESSION_KEY);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      } finally {
        setLoading(false);
      }
    };
    restoreSession();
  }, []);

  const login = async (email: string, password: string) => {
    const user = await loginUser(email, password);
    const simpleUser = toSimpleUser(user);
    setCurrentUser(simpleUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email: simpleUser.email, password }));
  };

  const register = async (email: string, password: string, hint: string) => {
    const user = await registerUser(email, password, hint);
    const simpleUser = toSimpleUser(user);
    setCurrentUser(simpleUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email: simpleUser.email, password }));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  const value: AuthContextType = {
    currentUser,
    loading,
    isReviewer: currentUser?.isReviewer ?? false,
    isAdmin: currentUser?.isAdmin ?? false,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
