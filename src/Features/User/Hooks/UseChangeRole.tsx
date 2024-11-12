import { changeRolUser } from "../Services/SvUsers";
import { useMutation, useQueryClient } from "react-query";
import { EditUserRole } from "../Services/User";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/GlobalTypes";

const useChangeUserRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: EditUserRole) =>
      toast.promise(changeRolUser(data), {
        loading: "Guardando...",
        success: <span>Éxito, se cambio el rol correctamente</span>,
        error: (error: ApiError) => (
          <span>Error en la edición: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("UserList");
    },
  });
};
export default useChangeUserRole;
