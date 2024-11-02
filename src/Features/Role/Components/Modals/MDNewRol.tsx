import { Modal, Button, FloatingLabel } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { Role } from "../../Types/Roles";
import UseCreateNewRole from "../../Screens/Hooks/UseCreateNewRole";

const MDNewRol = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit, reset } = useForm<Role>();

  const { mutate: createRole } = UseCreateNewRole();

  const onSubmit = (data: Role) => {
    createRole(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  };

  return (
    <Modal show={open} size="sm" onClose={() => setOpen(false)}>
      <Modal.Header>Nuevo Rol</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className=" flex flex-col gap-4">
          <div>
            <FloatingLabel
              variant="outlined"
              label="Nombre del Rol"
              {...register("name")}
            />
          </div>
          <div className=" text-sm hover:text-blue-600 cursor-pointer">
            <FloatingLabel
              variant="outlined"
              label="Descripcion del Rol"
              {...register("description")}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className=" flex items-center justify-center">
          <Button color="gray" onClick={() => setOpen(false)} tabIndex={2}>
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

export default MDNewRol;
