import { useEffect, useMemo, useState } from "react";
import UserContext from "../UserContex/UserContext";
import { User } from "../UserContex/UserContexType";
import UseGetProfile from "../../Features/User/Hooks/UseGetProfile";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(() => {
    return localStorage.getItem("isLogged") === "true";
  });
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  });

  const getProfile = UseGetProfile();

  useEffect(() => {
    getProfile.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ClientURL = import.meta.env.VITE_API_CLIENT_URL;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("authToken", token);

      const newUrl = ClientURL;

      window.history.replaceState({}, "", newUrl);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const contextValue = useMemo(
    () => ({
      isLogged,
      setIsLogged,
      currentUser,
      setCurrentUser,
    }),
    [isLogged, currentUser]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
export default UserProvider;
