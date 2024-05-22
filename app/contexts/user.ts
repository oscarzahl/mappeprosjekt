import { createContext, useContext } from "react";

type UserContextType = {
  id: string;
  email: string;
  isAdmin: boolean;
} | null;

export const UserContext = createContext<UserContextType>(null);

export const useUser = () => {
  return useContext(UserContext);
};
