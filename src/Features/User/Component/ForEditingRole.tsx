import { useQuery } from "react-query";
import { RolesResponse } from "../../Role/Types/Roles";
import { GetRolesList } from "../../Role/Services/SvRols";

const OPTRole2 = ( ) => {
    const { data: rolesData } = useQuery<RolesResponse, Error>(
        ["RoleList", Date],
        () => GetRolesList(),
        {
          staleTime: 600,
        }
      );
    
      return (
        <>
          <option value="">Seleccione un rol</option>
          {rolesData?.roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </>
      );
};

export default OPTRole2;