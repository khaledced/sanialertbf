import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface UserContextType {
  currentUser: User;
  isAdmin: boolean;
  switchToAdmin: () => void;
  switchToUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(true);

  const currentUser: User = isAdmin
    ? {
        id: 'admin1',
        email: 'admin@sanialert.com',
        name: 'Administrateur',
        role: 'admin'
      }
    : {
        id: 'user1',
        email: 'user@example.com',
        name: 'Utilisateur Test',
        role: 'user'
      };

  const switchToAdmin = () => setIsAdmin(true);
  const switchToUser = () => setIsAdmin(false);

  return (
    <UserContext.Provider value={{ currentUser, isAdmin, switchToAdmin, switchToUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

