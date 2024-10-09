import { useMutation, useQueryClient } from "react-query";
import { ApiError, Role } from "../../Types/Roles";
import { postNewRol } from "../../Services/SvRols";
import toast from "react-hot-toast";

const UseCreateNewRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Role) =>
      toast.promise(postNewRol(data), {
        loading: "Creando...",
        success: <span>Exito, Rol añadido</span>,
        error: (error: ApiError) => (
          <span>Error en la creación: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("RoleList");
    },
  });
};

export default UseCreateNewRole;
