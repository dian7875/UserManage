import { Table } from "flowbite-react";
import { useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { CiBoxList } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import MDDelete from "./Modals/MDDelete";
import MDEditInfo from "./Modals/MDEditInfo";
import MDEditPermissionsList from "./Modals/MDEditPermissionsList";
import { Role } from "../Types/Roles";

const RolsRows = ({ Role }: { Role: Role }) => {
  const [openEL, setOpenEL] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [openE, setOpenE] = useState(false);
  return (
    <>
      <Table.Row className="h-20 ">
        <Table.Cell>{Role.id} </Table.Cell>
        <Table.Cell>{Role.name} </Table.Cell>
        <Table.Cell>Pendiente</Table.Cell>
        <Table.Cell>
          <div className="flex items-center justify-center gap-5">
            <button
              type="button"
              title="Editar informacion de usuario"
              className="hover:text-yellow-400"
              onClick={() => setOpenE(true)}
            >
              <LuFileEdit size={24} />
            </button>
            <button
              type="button"
              title="Editar Permisos del Rol"
              className=" hover:text-yellow-400"
              onClick={() => setOpenEL(true)}
            >
              <CiBoxList size={24} />
            </button>
            <button
              type="button"
              title="Reactivar Usuario"
              className=" hover:text-red-800"
              onClick={() => setOpenD(true)}
            >
              <RiDeleteBin5Fill size={24} />
            </button>
          </div>
        </Table.Cell>
      </Table.Row>
      <MDDelete open={openD} setOpen={setOpenD} id={Role.id} />
      <MDEditInfo open={openE} setOpen={setOpenE} Role={Role} />
      <MDEditPermissionsList open={openEL} setOpen={setOpenEL} />
    </>
  );
};

export default RolsRows;
