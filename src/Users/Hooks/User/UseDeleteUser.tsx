import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../../Services/SvUsers";
import { ApiError } from "../../Types/Roles";

const UseDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (id:number) =>
        toast.promise(deleteUser(id), {
          loading: "Eliminando...",
          success: <span>Éxito, usuario eliminado</span>,
          error: (error: ApiError) => (
            <span>Error al eliminar: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("RoleList");
      },
    });
  };
export default UseDeleteUser
