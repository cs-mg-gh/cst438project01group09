import React, { createContext, useState, ReactNode } from 'react';

type UserContextType = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState('fail');
  const [userId, setUserId] = useState<number | null>(null);
  
  const value:UserContextType= { username, setUsername, userId, setUserId };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
