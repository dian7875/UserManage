import toast from 'react-hot-toast';
import { useQueryClient, useMutation } from 'react-query';
import { ApiError } from '../../../Types/GlobalTypes';
import { enableUser } from '../Services/SvUsers';

const useReactiveUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: number) =>
        toast.promise(enableUser(data), {
          loading: "Guardando...",
          success: <span>Éxito, usuario reactivado correctamente</span>,
          error: (error: ApiError) => (
            <span>Error al reactivar: {error.message}</span>
          ),
        }),
      onSuccess() {
        queryClient.invalidateQueries("UserList");
      },
    });
  };

export default useReactiveUser
