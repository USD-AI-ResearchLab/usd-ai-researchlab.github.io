import React, { createContext, useState, useEffect } from 'react';
import {
  loginUser,
  registerUser,
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
  isApprover: boolean;
}

export interface AuthContextType {
  currentUser: SimpleUser | null;
  loading: boolean;
  isReviewer: boolean;
  isAdmin: boolean;
  isApprover: boolean;
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
  isApprover: user.isApprover,
});

export const SimpleAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<SimpleUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session on mount — purely from localStorage, no network calls
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SESSION_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.email && parsed.displayName) {
          setCurrentUser(parsed as SimpleUser);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const user = await loginUser(email, password);
    const simpleUser = toSimpleUser(user);
    setCurrentUser(simpleUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify(simpleUser));
  };

  const register = async (email: string, password: string, hint: string) => {
    const user = await registerUser(email, password, hint);
    const simpleUser = toSimpleUser(user);
    setCurrentUser(simpleUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify(simpleUser));
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
    isApprover: currentUser?.isApprover ?? false,
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
