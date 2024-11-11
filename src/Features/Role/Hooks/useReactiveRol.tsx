import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { reactivateRol } from "../Services/SvRols"; 
import { ApiError } from "../../../Types/GlobalTypes";

const UseReactivateRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      toast.promise(reactivateRol(id), {
        loading: "Reactivando...",
        success: <span>¡Éxito! Rol reactivado</span>,
        error: (error: ApiError) => (
          <span>Error al reactivar: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("RoleList");
    },
  });
};

export default UseReactivateRole;
