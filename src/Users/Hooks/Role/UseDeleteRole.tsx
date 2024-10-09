import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { ApiError } from "../../Types/Roles";
import { deletetRol } from "../../Services/SvRols";

const UseDeleteRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      toast.promise(deletetRol(id), {
        loading: "Editando...",
        success: <span>Exito, Rol elimiando</span>,
        error: (error: ApiError) => (
          <span>Error al eliminar: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("RoleList");
    },
  });
};

export default UseDeleteRole;
