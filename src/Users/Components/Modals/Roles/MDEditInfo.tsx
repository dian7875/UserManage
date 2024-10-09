import { Modal, FloatingLabel, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { Role } from "../../../Types/Roles";
import UseEditRoleInfo from "../../../Hooks/Role/UseEditRoleInfo";

const MDEditInfo = ({
  open,
  setOpen,
  Role,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  Role: Role;
}) => {
  const { register, handleSubmit, reset } = useForm<Role>({
    defaultValues: {
      id: Role.id,
      name: Role.name,
      description: Role.description,
    },
  });

  const { mutate: editRole } = UseEditRoleInfo();

  const onSubmit = (data: Role) => {
    editRole(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  };

  return (
    <Modal show={open} size="md" onClose={() => setOpen(false)}>
      <Modal.Header>Editar informacion del Rol</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body className=" flex flex-col gap-4">
          <div>
            <FloatingLabel
              variant="outlined"
              label="Nombre"
              {...register("name")}
            />
          </div>
          <div>
            <FloatingLabel
              variant="outlined"
              label="Descripcion"
              {...register("description")}
            />
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

export default MDEditInfo;
