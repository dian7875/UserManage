import { useState } from "react";
import { changeRolUser } from "../Services/SvUsers";
import { useQueryClient } from "react-query";  

interface UseEditUserRoleProps {
  id: number;
  roleId: number;
}

const useChangeUserRole = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const queryClient = useQueryClient(); 

  const editUserRole = async ({ id, roleId }: UseEditUserRoleProps) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const status = await changeRolUser({ id, roleId });
      if (status === 204) {
        setIsSuccess(true);
        queryClient.invalidateQueries('UserList');
        queryClient.invalidateQueries('RoleList');
      }
    } catch (err) {
      setError("Hubo un error al cambiar el rol del usuario.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    isSuccess,
    editUserRole,
  };
};

export default useChangeUserRole;