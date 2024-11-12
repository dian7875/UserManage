import { useMutation } from "react-query";
import { ApiError } from "../../../Types/GlobalTypes";
import toast from "react-hot-toast";
import { logOut } from "../Services/SvUsers";

const UseLogOut = () => {
  const logginURL = import.meta.env.VITE_API_AUTH_URL;
  const ClientURL = import.meta.env.VITE_API_CLIENT_URL;

  const goToLogin = () => {
    window.location.href = `${logginURL}/?redirect=${encodeURIComponent(
      ClientURL
    )}`;
  };
  return useMutation({
    mutationFn: () =>
      toast.promise(logOut(), {
        loading: "Cerrando sesión...",
        success: <span>Éxito, vuelva pronto</span>,
        error: (error: ApiError) => <span>Error: {error.message}</span>,
      }),
    onSuccess() {
      localStorage.removeItem("isLogged");
      localStorage.removeItem("currentUser");
      goToLogin();
    },
  });
};

export default UseLogOut;
