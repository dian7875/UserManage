import { Button, FloatingLabel, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

const MDEditGeneralInfo = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal show={open} size="md" onClose={() => setOpen(false)}>
      <Modal.Header>Editar informacion General</Modal.Header>
      <form>
        <Modal.Body className=" flex flex-col gap-4">
          <div>
            <FloatingLabel variant="outlined" label="Nombre" />
          </div>
          <div>
            <FloatingLabel variant="outlined" label="Primer apellido" />
          </div>
          <div>
            <FloatingLabel variant="outlined" label="Segundo apellido" />
          </div>
          <div>
            <FloatingLabel variant="outlined" label="Direccion" />
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
      </form>
    </Modal>
  );
};

export default MDEditGeneralInfo;
