import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { putEditRol } from "../../Services/SvRols";
import { ApiError } from "../../../../Types/GlobalTypes";
import { roles } from "../../Types/Roles";

const UseEditRoleInfo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: roles) =>
      toast.promise(putEditRol(data), {
        loading: "Editando...",
        success: <span>Éxito, rol editado</span>,
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


