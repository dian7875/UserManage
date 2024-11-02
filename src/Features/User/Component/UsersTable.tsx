import { Pagination, Table } from "flowbite-react";
import UsersRows from "./UsersRows";
import { useState } from "react";
import SltLimit from "../../../Components/SltLimit";
import { User } from "../Services/User";
import { useQuery } from "react-query";
import { GetUserList } from "../Services/SvUsers";

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { data: Users } = useQuery<User[], Error>(
    ["UserList", Date],
    () => GetUserList(),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      {Users?.length == 0 ? (
        <span>
          No existen usuarios
        </span>
      ) : (
        <>
          <Table className=" text-center" hoverable>
            <Table.Head>
              <Table.HeadCell>ID del usuario</Table.HeadCell>
              <Table.HeadCell>Cedula</Table.HeadCell>
              <Table.HeadCell>Nombre</Table.HeadCell>
              <Table.HeadCell>Apellidos</Table.HeadCell>
              <Table.HeadCell>Numero de Telefono</Table.HeadCell>
              <Table.HeadCell>Rol</Table.HeadCell>
              <Table.HeadCell>Fecha de Registro</Table.HeadCell>
              <Table.HeadCell>Estado</Table.HeadCell>
              <Table.HeadCell>Acciones</Table.HeadCell>
            </Table.Head>
            <Table.Body className="h-96 dark:bg-gray-800">
              {Users &&
                Users.map((user) => <UsersRows key={user.id} User={user} />)}
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

export default UsersTable;
