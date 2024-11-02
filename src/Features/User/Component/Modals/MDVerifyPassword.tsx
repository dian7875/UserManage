import { Button, FloatingLabel, Modal } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import MDEditPassword from "./MDEditPassword";

const MDVerifyPassword = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [verify, setVerify] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Modal show={open} size="md" onClose={() => setOpen(false)}>
      <Modal.Header>Es necesario verificar su identidad</Modal.Header>
      <form>
        <Modal.Body>
          <div className=" relative">
            <FloatingLabel
              variant="outlined"
              label="Ingrese su contraseña"
              type={showPassword ? "text" : "password"}
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
      <MDEditPassword open={verify} setOpen={setVerify} />
    </Modal>
  );
};

export default MDVerifyPassword;
