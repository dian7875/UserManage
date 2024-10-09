import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { putEditRol } from "../../Services/SvRols";
import { Role, ApiError } from "../../Types/Roles";

const UseEditRoleInfo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Role) =>
      toast.promise(putEditRol(data), {
        loading: "Editando...",
        success: <span>Exito, Rol editado</span>,
        error: (error: ApiError) => (
          <span>Error en la edición: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("RoleList");
    },
  });
};

export default UseEditRoleInfo;
