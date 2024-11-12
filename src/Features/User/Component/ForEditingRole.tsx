import { useQuery } from "react-query";
import { GetRolesList } from "../../Role/Services/SvRols";
import { ListaRoles } from "../../Role/Types/Roles";

const OPTRole2 = () => {
  const { data: rolesData } = useQuery<ListaRoles, Error>(
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
