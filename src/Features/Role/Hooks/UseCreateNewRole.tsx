import { useMutation, useQueryClient } from "react-query";
import { postNewRol } from "../Services/SvRols";
import toast from "react-hot-toast";
import { ApiError } from "../../../Types/GlobalTypes";
import { roles } from "../Types/Roles";

const UseCreateNewRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: roles) =>
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
