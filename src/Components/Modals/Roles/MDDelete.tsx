import { Modal, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import UseDeleteRole from "../../../Features/Role/Screens/Hooks/UseDeleteRole";

const MDDelete = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
}) => {
  const { mutate: deleteRole } = UseDeleteRole();

  const onConfirm = () => {
    deleteRole(id, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <Modal show={open} onClose={() => setOpen(false)} popup size="sm">
      <Modal.Body className=" flex flex-col items-center justify-center mt-7">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        Esta seguro de eliminar este Rol
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center gap-5">
        <Button color="gray" tabIndex={2} onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button color="dark" type="submit" onClick={onConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDDelete;
