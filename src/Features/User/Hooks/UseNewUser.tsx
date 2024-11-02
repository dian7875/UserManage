import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { User } from "../Services/User";
import { ApiError } from "../../../Types/GlobalTypes";
import { postNewUser } from "../Services/SvUsers";


const UseNewUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: User) =>
      toast.promise(postNewUser(data), {
        loading: "Guardando...",
        success: <span>Exito, usuario añadido</span>,
        error: (error: ApiError) => (
          <span>Error en la creación: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("RoleList");
    },
  });
};

export default UseNewUser;
