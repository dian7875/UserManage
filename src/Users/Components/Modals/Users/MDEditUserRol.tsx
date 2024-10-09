import { Modal, Select, Button, Label } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const MDEditUserRol = ({
    open,
    setOpen,
  }: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  }) => {
  return (
    <Modal show={open} size="sm" onClose={()=>setOpen(false)}>
      <Modal.Header>Cambio de Rol de usuario</Modal.Header>
      <Modal.Body>
        <div>
          <Label value="Rol" />
          <Select name="Role" title="Role">
            <option value="1">Administrador</option>
            <option value="2">Vendedor</option>
            <option value="3">Colaborador</option>
            <option value="4">Usuario Externo</option>
          </Select>
        </div>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center">
        <Button color="gray"
        onClick={()=>setOpen(false)} tabIndex={2}>Cancelar</Button>
        <Button color="dark">Confirmar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDEditUserRol;
