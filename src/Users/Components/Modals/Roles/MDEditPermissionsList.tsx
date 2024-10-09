import { Modal, Button, Label, Checkbox } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const MDEditPermissionsList = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal show={open} size="md" onClose={() => setOpen(false)}>
      <Modal.Header>Editar lista de permisos</Modal.Header>
      <Modal.Body className=" flex flex-col gap-4">
        <div className=" flex items-center gap-2">
          <Checkbox />
          <Label value="Pendientes" />
        </div>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center gap-5">
        <Button color="gray" tabIndex={2} onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button color="dark" type="submit">
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDEditPermissionsList;
