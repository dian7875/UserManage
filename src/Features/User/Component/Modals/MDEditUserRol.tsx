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
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const { isLoading, error, isSuccess, editUserRole } = useChangeUserRole();

  const handleConfirm = () => {
    if (selectedRole !== null) {
      editUserRole({ id: userId, roleId: selectedRole }).then(() => {
        setOpen(false);  
      });
    }
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value ? Number(e.target.value) : null;
    setSelectedRole(value);
  };

  return (
    <Modal show={open} size="sm" onClose={() => setOpen(false)}>
      <Modal.Header>Cambio de Rol de usuario</Modal.Header>
      <Modal.Body>
        <div>
          <Label value="Rol" />
          <Select name="Role" title="Role" onChange={handleRoleChange} value={selectedRole || ""}>
            <OPTRole2 />
          </Select>
          {error && <p className="text-red-500">{error}</p>}
          {isSuccess && <p className="text-green-500">¡Rol cambiado con éxito!</p>}
        </div>
      </Modal.Body>
      <Modal.Footer className="flex items-center justify-center">
        <Button color="gray" onClick={() => setOpen(false)} disabled={isLoading}>Cancelar</Button>
        <Button color="dark" onClick={handleConfirm} disabled={isLoading || selectedRole === null}>
          {isLoading ? "Cargando..." : "Confirmar"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDEditUserRol;