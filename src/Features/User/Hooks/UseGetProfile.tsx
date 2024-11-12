import { useContext } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import UserContext from "../../../Context/UserContex/UserContext";
import { getProfile } from "../Services/SvUsers";

const UseGetProfile = () => {
  const logginURL = import.meta.env.VITE_API_AUTH_URL;
  const ClientURL = import.meta.env.VITE_API_CLIENT_URL;

  const goToLogin = () => {
    window.location.href = `${logginURL}/?redirect=${encodeURIComponent(
      ClientURL
    )}`;
  };

  const { setCurrentUser, setIsLogged } = useContext(UserContext);
  return useMutation(getProfile, {
    onSuccess(data) {
      if (data) {
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("currentUser", JSON.stringify(data));
        setCurrentUser(data);
        setIsLogged(true);
      }
    },
    onError() {
      toast("Su sesión a expirado.");
      localStorage.removeItem("isLogged");
      localStorage.removeItem("currentUser");
      goToLogin();
    },
  });
};

export default UseGetProfile;
