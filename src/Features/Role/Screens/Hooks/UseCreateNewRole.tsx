import { useMutation, useQueryClient } from "react-query";
import { postNewRol } from "../../Services/SvRols";
import toast from "react-hot-toast";
import { Role } from "../../Types/Roles";
import { ApiError } from "../../../../Types/GlobalTypes";

const UseCreateNewRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Role) =>
      toast.promise(postNewRol(data), {
        loading: "Creando...",
        success: <span>Éxito, Rol añadido</span>,
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
