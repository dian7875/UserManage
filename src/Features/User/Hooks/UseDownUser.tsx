import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { disableUser } from "../Services/SvUsers";
import { ApiError } from "../../../Types/GlobalTypes";

const UseDownUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: number) =>
      toast.promise(disableUser(data), {
        loading: "Guardando...",
        success: <span>Éxito, usuario desactivado correctamente</span>,
        error: (error: ApiError) => (
          <span>Error al desactivar: {error.message}</span>
        ),
      }),
    onSuccess() {
      queryClient.invalidateQueries("UserList");
    },
  });
};

export default UseDownUser;
