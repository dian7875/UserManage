import { Button, FloatingLabel, Modal, Popover } from "flowbite-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { IoEyeOffSharp, IoEyeSharp, IoAlert } from "react-icons/io5";

const MDEditPassword = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, watch } = useForm();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fail, setFail] = useState<boolean>(false);
  const [formatFail, setFormatFail] = useState<boolean>(false);
  const Password = watch("password");
  const RPassword = watch("repeatPassword");

  useEffect(() => {
    const isValidLength = Password && Password.length >= 8;
    const hasUpperCase = Password && /[A-Z]/.test(Password);
    const hasLowerCase = Password && /[a-z]/.test(Password);
    const hasSpecialChar = Password && /[!@#$%^&*(),.?":{}|<>]/.test(Password);
    if (Password) {
      if (Password && RPassword && Password !== RPassword) {
        setFail(true);
      } else {
        setFail(false);
      }

      if (!isValidLength || !hasUpperCase || !hasLowerCase || hasSpecialChar) {
        setFormatFail(true);
      } else {
        setFormatFail(false);
      }
    } else {
      setFormatFail(false);
    }
  }, [Password, RPassword]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal show={open} size="md" onClose={() => setOpen(false)}>
      <Modal.Header>Cambio de contraseña</Modal.Header>
      <Modal.Body>
        <div className=" relative">
          <FloatingLabel
            required
            variant="outlined"
            label="Contraseña"
            color={formatFail ? "error" : "default"}
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <Popover
            content={
              <div
                className={`m-2 text-red-900 bg-white rounded-lg z-50
                    ${formatFail ? "" : "hidden"}`}
              >
                La contraseña no puede contener caracteres especiales. <br />
                Debe contener almenos 1 mayuscula y una minuscula. <br />
                Debe tener una longitud minima de 8 caracteres
              </div>
            }
          >
            <button type="button" className=" absolute right-4 top-4">
              {formatFail ? (
                <IoAlert size={20} className=" hover:text-stone-500" />
              ) : (
                ""
              )}
            </button>
          </Popover>
        </div>
        <div className="relative">
          <FloatingLabel
            required
            variant="outlined"
            label="Repetir contraseña"
            type={showPassword ? "text" : "password"}
            color={fail ? "error" : "default"}
            {...register("repeatPassword")}
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
          {fail && (
            <span className=" absolute text-red-500 text-sm">
              Las contraseñas no coinciden
            </span>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className=" flex items-center justify-center gap-5">
        <Button color="gray" tabIndex={2} onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button color="dark" type="submit" disabled={fail || formatFail}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MDEditPassword;
