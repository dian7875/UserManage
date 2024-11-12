import { Modal, Select, Button, Label } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import OPTRole2 from "../ForEditingRole";
import useChangeUserRole from "../../Hooks/UseChangeRole";

const MDEditUserRol = ({
  open,
  setOpen,
  userId,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  userId: number;
}) => {
  const [rol, setRol] = useState<number>(1);
  const { mutate: changeRol, isLoading } = useChangeUserRole();
  const onConfirm = () => {
    changeRol(
      { id: userId, roleId: rol },
      {
        onSuccess: () => setOpen(false),
      }
    );
  };

  return (
    <Modal show={open} size="sm" onClose={() => setOpen(false)}>
      <Modal.Header>Cambio de Rol de usuario</Modal.Header>
      <Modal.Body>
        <div>
          <Label value="Rol" />
          <Select
            name="Role"
            title="Role"
            onChange={(event) => {
              setRol(Number(event.target.value));
            }}
          >
            <OPTRole2 />
          </Select>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-center">
        <Button color="gray" onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button color="dark" onClick={onConfirm} disabled={isLoading} >
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDEditUserRol;
