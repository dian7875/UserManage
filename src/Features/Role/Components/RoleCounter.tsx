import { Card } from "flowbite-react";
import { FaUsersGear } from "react-icons/fa6";
import { useQuery } from "react-query";
import { GetRolesList } from "../Services/SvRols";
import { ListaRoles } from "../Types/Roles";
const RoleCounter = () => {
  const { data: Roles } = useQuery<ListaRoles, Error>(
    ["RoleList", Date],
    () => GetRolesList(),
    {
      staleTime: 600,
    }
  );

  const counter =Roles?.roles.length;

  return (
    <>
      <Card className=" hover:scale-105">
        <div className=" flex gap-3 items-center">
          <FaUsersGear size={120} />
          <div>
            <h5 className=" font-bold text-xl">Conteo de roles</h5>
            <h5 className=" font-bold text-xl">
              {" "}
              {counter && counter > 0 ? counter : "0"}{" "}
            </h5>
          </div>
        </div>
      </Card>
    </>
  );
};

export default RoleCounter;
