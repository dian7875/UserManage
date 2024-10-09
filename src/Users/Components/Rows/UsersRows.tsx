import { Table, Checkbox } from "flowbite-react";
import { useState } from "react";
import { TbEditCircle } from "react-icons/tb";
import MDEditUserRol from "../Modals/Users/MDEditUserRol";
import { TbUserUp, TbUserX } from "react-icons/tb";
import MDUpUser from "../Modals/Users/MDUpUser";
import MDDowUser from "../Modals/Users/MDDowUser";

const UsersRows = () => {
  const [openE, setOpenE] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [openU, setOpenU] = useState(false);
  return (
    <>
      <Table.Row className="h-20 ">
        <Table.Cell>1</Table.Cell>
        <Table.Cell>504420813</Table.Cell>
        <Table.Cell>Dian Adrian</Table.Cell>
        <Table.Cell>Aguilar Diaz</Table.Cell>
        <Table.Cell>61968116</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
        <Table.Cell>2/2/2002</Table.Cell>
        <Table.Cell>
          <Checkbox checked readOnly />
        </Table.Cell>
        <Table.Cell>
          <div className="flex items-center justify-center gap-5">
            <button
              type="button"
              title="Editar informacion de usuario"
              className="hover:text-yellow-400"
              onClick={() => setOpenE(true)}
            >
              <TbEditCircle size={24} />
            </button>
            <button
              type="button"
              title="Deshabilitar Usuario"
              className=" hover:text-red-800"
              onClick={() => setOpenD(true)}
            >
              <TbUserX size={24} />
            </button>
            <button
              type="button"
              title="Reactivar Usuario"
              className=" hover:text-blue-800"
              onClick={() => setOpenU(true)}
            >
              <TbUserUp size={24} />
            </button>
          </div>
        </Table.Cell>
      </Table.Row>
      <MDEditUserRol open={openE} setOpen={setOpenE} />
      <MDUpUser open={openU} setOpen={setOpenU} />
      <MDDowUser open={openD} setOpen={setOpenD} />
    </>
  );
};

export default UsersRows;
