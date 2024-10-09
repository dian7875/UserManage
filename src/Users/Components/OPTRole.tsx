import { useQuery } from "react-query";
import { GetRolesList } from "../Services/SvRols";
import { Role } from "../Types/Roles";

const OPTRole = () => {
  const { data: Roles } = useQuery<Role[], Error>(
    ["RoleList", Date],
    () => GetRolesList(),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      <option value="">Seleccione un rol</option>
      {Roles?.map((role) => (
        <option value={role.id}> {role.name} </option>
      ))}
    </>
  );
};

export default OPTRole;
