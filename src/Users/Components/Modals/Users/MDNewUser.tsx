import { Button, FloatingLabel, Modal, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

const MDNewUser = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { register } = useForm();
  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <Modal.Header>Añadir nuevo usuario</Modal.Header>
      <form>
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
                {...register("lastName")}
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
              <Select className="custom-Select" required {...register("role")}>
                <option value="">Rol</option>
                <option value="1">Admin</option>
                <option value="2">Vendedor</option>
                <option value="3">Usuario</option>
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
