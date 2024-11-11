import { useQuery } from "react-query";
import { GetRolesList } from "../Services/SvRols";
import { RolesResponse } from "../Types/Roles";

const OPTRole = () => {
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
        <option value={role.id}> {role.name} </option>
      ))}
    </>
  );
};

export default OPTRole;