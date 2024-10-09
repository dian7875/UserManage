import { Table } from "flowbite-react";
import { useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { CiBoxList } from "react-icons/ci";
import { RiDeleteBin5Fill } from "react-icons/ri";
import MDDelete from "../Modals/Roles/MDDelete";
import MDEditInfo from "../Modals/Roles/MDEditInfo";
import MDEditPermissionsList from "../Modals/Roles/MDEditPermissionsList";

const RolsRows = () => {
  const [openEL, setOpenEL] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [openE, setOpenE] = useState(false);
  return (
    <>
      <Table.Row className="h-20 ">
        <Table.Cell>1</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
        <Table.Cell>For all</Table.Cell>
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
      <MDDelete open={openD} setOpen={setOpenD} />
      <MDEditInfo open={openE} setOpen={setOpenE} />
      <MDEditPermissionsList open={openEL} setOpen={setOpenEL} />
    </>
  );
};

export default RolsRows;
