import { Checkbox, Table } from "flowbite-react";
import { useState } from "react";
import { TbEditCircle } from "react-icons/tb";
import MDEditUserRol from "./Modals/MDEditUserRol";
import { TbUserUp, TbUserX } from "react-icons/tb";
import MDUpUser from "./Modals/MDUpUser";
import MDDowUser from "./Modals/MDDowUser";
import { User } from "../Services/User";
import { formatToDMY } from "../../../Components/FormatTempo";

const UsersRows = ({ User }: { User: User }) => {
  const [openE, setOpenE] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [openU, setOpenU] = useState(false);
  return (
    <>
      <Table.Row className="h-20 ">
        <Table.Cell>{User.id} </Table.Cell>
        <Table.Cell>{User.cedula}</Table.Cell>
        <Table.Cell>{User.name}</Table.Cell>
        <Table.Cell>
          {User.lastname1} {User.lastname2}{" "}
        </Table.Cell>
        <Table.Cell>{User.phone} </Table.Cell>
        <Table.Cell>{User.rol}</Table.Cell>
        <Table.Cell>{formatToDMY(User.dateRegistered)} </Table.Cell>
        <Table.Cell>
          <Checkbox readOnly checked={User.isActive} />
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
            {User.isActive ? (
              <button
                type="button"
                title="Deshabilitar Usuario"
                className=" hover:text-red-800"
                onClick={() => setOpenD(true)}
              >
                <TbUserX size={24} />
              </button>
            ) : (
              <button
                type="button"
                title="Reactivar Usuario"
                className=" hover:text-blue-800"
                onClick={() => setOpenU(true)}
              >
                <TbUserUp size={24} />
              </button>
            )}
          </div>
        </Table.Cell>
      </Table.Row>
      <MDEditUserRol open={openE} setOpen={setOpenE} userId={User.id} />
      <MDUpUser open={openU} setOpen={setOpenU} userId={User.id} />
      <MDDowUser open={openD} setOpen={setOpenD} userId={User.id} />
    </>
  );
};

export default UsersRows;
