import { createContext } from "react";
import { UserContextType } from "./UserContexType";

const UserContext = createContext<UserContextType>({
  isLogged: false,
  setIsLogged: () => {},
  currentUser: null,
  setCurrentUser: () => {},
});

export default UserContext;
