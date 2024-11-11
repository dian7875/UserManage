import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { deactivateRol } from "../Services/SvRols";
import { ApiError } from "../../../Types/GlobalTypes";

const UseDeleteRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      toast.promise(deactivateRol(id), {
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
