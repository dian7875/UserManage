import { Table, Pagination } from "flowbite-react";
import { useState } from "react";
import { useQuery } from "react-query";
import SltLimit from "../../../Components/SltLimit";
import { GetRolesList } from "../Services/SvRols";
import { RolesResponse } from "../Types/Roles";
import RolsRows from "./RolsRows";

const RollTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data: rolesData } = useQuery<RolesResponse, Error>(
    ["RoleList", currentPage],
    () => GetRolesList(currentPage),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      {rolesData && rolesData.roles.length == 0 ? (
        <span className="h-96 items-center justify-center flex">
          No existen Roles
        </span>
      ) : (
        <>
          <Table className=" text-center" hoverable>
            <Table.Head>
              <Table.HeadCell>ID del rol</Table.HeadCell>
              <Table.HeadCell>Nombre</Table.HeadCell>
              <Table.HeadCell>Descripcion</Table.HeadCell>
              <Table.HeadCell>Acciones</Table.HeadCell>
            </Table.Head>
            <Table.Body className="h-96 dark:bg-gray-800">
              {rolesData?.roles.map((Role) => (
                <RolsRows key={Role.id} Role={Role} />
              ))}
            </Table.Body>
          </Table>
          <div className=" w-full flex justify-between items-center">
            <SltLimit total={100} />
            <Pagination
              currentPage={currentPage}
              totalPages={30}
              onPageChange={onPageChange}
              showIcons
              previousLabel="Anterior"
              nextLabel="Siguiente"
            />
          </div>
        </>
      )}
    </>
  );
};

export default RollTable;