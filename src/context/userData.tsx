import React, { createContext, useContext, useState, ReactNode } from "react";

import { User } from "../@types/models.interface";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  userData: User;
  getUser: ({ id }: User) => void;
  setUser: (userData: User) => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<User>({} as User);

  const setUser = (userData: User) => {
    setUserData(userData);
  };

  const getUser = () => {
    return userData;
  };
  return (
    <UserContext.Provider
      value={{
        userData,
        getUser,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function userHook(): UserContextData {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(UserContext);

  return context;
}
