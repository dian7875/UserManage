import { Button, FloatingLabel, Modal, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { User } from "../../../Types/User";
import UseNewUser from "../../../Hooks/User/UseNewUser";
import OPTRole from "../../OPTRole";

const MDNewUser = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, reset, handleSubmit } = useForm<User>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { mutate: createUser } = UseNewUser();

  const onSubmit = async (data: User) => {
    createUser(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  };

  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Añadir nuevo usuario</Modal.Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <fieldset className=" grid grid-cols-2 gap-3">
            <div>
              <FloatingLabel
                required
                type="number"
                variant="outlined"
                label="Cedula"
                {...register("cedula")}
              />
            </div>
            <div>
              <FloatingLabel
                required
                variant="outlined"
                label="Nombre"
                {...register("name")}
              />
            </div>
            <div>
              <FloatingLabel
                required
                variant="outlined"
                label="Apellido"
                {...register("lastName1")}
              />
            </div>
            <div>
              <FloatingLabel
                variant="outlined"
                label="Segundo Apellido"
                {...register("lastName2")}
              />
            </div>
            <div>
              <FloatingLabel
                required
                variant="outlined"
                label="Fecha de Nacimiento"
                type="date"
                {...register("birthDate")}
              />
            </div>
            <div>
              <FloatingLabel
                required
                variant="outlined"
                label="Correo"
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <FloatingLabel
                required
                variant="outlined"
                label="Telefono"
                type="text"
                pattern="^[+\-\d]+$"
                {...register("phone")}
              />
            </div>
            <div>
              <FloatingLabel
                required
                variant="outlined"
                label="Dirección"
                {...register("address")}
              />
            </div>
            <div className=" relative">
              <FloatingLabel
                required
                variant="outlined"
                label="Contraseña temporal"
                type={showPassword ? "text" : "password"}
                {...register("password")}
              />
              <button
                type="button"
                className=" absolute right-4 top-4"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <IoEyeOffSharp size={20} className=" hover:text-stone-500" />
                ) : (
                  <IoEyeSharp size={20} className=" hover:text-stone-500" />
                )}
              </button>
            </div>
            <div>
              <Select className="custom-Select" required {...register("rolId")}>
                <OPTRole />
              </Select>
            </div>
          </fieldset>
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

export default MDNewUser;
