import { useContext } from 'react';
import AuthContext from '../contexts/SimpleAuthContext';
import type { AuthContextType } from '../contexts/SimpleAuthContext';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a SimpleAuthProvider');
  }
  return context;
};
