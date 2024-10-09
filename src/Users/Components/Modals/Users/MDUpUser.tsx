import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const MDUpUser = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal show={open} onClose={() => setOpen(false)} popup size="sm">
      <Modal.Body className=" flex flex-col items-center justify-center mt-7">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        Esta seguro de reactivar el usuario
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

export default MDUpUser;
