import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "react-query";
import { ApiError } from "../../Types/Roles";
import { User } from "../../Types/User";
import { postNewUser } from "../../Services/SvUsers";

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
