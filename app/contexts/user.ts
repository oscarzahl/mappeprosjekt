import { createContext, useContext } from "react";

type UserContextType = string | null;

export const UserContext = createContext<UserContextType>(null);

export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
