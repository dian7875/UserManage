import { Table } from "flowbite-react";
import { useState } from "react";
import { LuFileEdit } from "react-icons/lu";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdRestoreFromTrash } from "react-icons/md";
import MDDelete from "./Modals/MDDelete";
import MDEditInfo from "./Modals/MDEditInfo";
import { roles } from "../Types/Roles";
import MDReactivate from "./Modals/MDReactivate";

const RolsRows = ({ Role }: { Role: roles }) => {
  const [openR, setOpenR] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [openE, setOpenE] = useState(false);

  const roleStatus = Role.isActive ? "Activo" : "Inactivo";
  return (
    <>
      <Table.Row className="h-20 ">
        <Table.Cell>{Role.id} </Table.Cell>
        <Table.Cell>{Role.name} </Table.Cell>
        <Table.Cell>{roleStatus}</Table.Cell>
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
            {Role.isActive ? (
              <>
                <button
                  type="button"
                  title="Reactivar Rol"
                  className="hover:text-yellow-400"
                  onClick={() => setOpenR(true)}
                >
                  <MdRestoreFromTrash size={27} />
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  title="Desactivar Rol"
                  className=" hover:text-red-800"
                  onClick={() => setOpenD(true)}
                >
                  <RiDeleteBin5Fill size={24} />
                </button>
              </>
            )}
          </div>
        </Table.Cell>
      </Table.Row>
      <MDDelete open={openD} setOpen={setOpenD} id={Role.id} />
      <MDEditInfo open={openE} setOpen={setOpenE} Role={Role} />
      <MDReactivate open={openR} setOpen={setOpenR} id={Role.id} />
    </>
  );
};

export default RolsRows;
