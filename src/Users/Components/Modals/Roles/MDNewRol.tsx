import { Modal, Button, FloatingLabel } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const MDNewRol = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal show={open} size="sm" onClose={() => setOpen(false)}>
      <Modal.Header>Nuevo Rol</Modal.Header>
      <form>
        <Modal.Body className=" flex flex-col gap-4">
          <div>
            <FloatingLabel variant="outlined" label="Nombre del Rol" />
          </div>
          <div className=" text-sm hover:text-blue-600 cursor-pointer">
            <FloatingLabel variant="outlined" label="Descripcion del Rol" />
          </div>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-center">
          <Button color="gray" onClick={() => setOpen(false)} tabIndex={2}>
            Cancelar
          </Button>
          <Button color="dark">Confirmar</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default MDNewRol;
