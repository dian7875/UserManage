import { Card, Button } from "flowbite-react";
import { useState } from "react";
import MDEditContacs from "./Modals/MDEditContacs";
import MDEditGeneralInfo from "./Modals/MDEditGeneralInfo";
import MDVerifyPassword from "./Modals/MDVerifyPassword";

const EditUserInfo = () => {
  const [openG, setOpenG] = useState<boolean>(false);
  const [openC, setOpenC] = useState<boolean>(false);
  const [openP, setOpenP] = useState<boolean>(false);

  return (
    <div>
      <div
        className=" w-full flex items-center justify-center
       dark:text-white "
      >
        <div className=" w-4/5 flex flex-col gap-6 justify-center">
          <fieldset className="mt-10">
            <legend className=" font-bold text-2xl">Información General</legend>
            <Card className=" w-full">
              <div className=" w-full flex items-end justify-between">
                <div className=" flex items-center gap-5">
                  <figure>
                    <img
                      className=" rounded-full w-40 h-40"
                      src="https://stickershop.line-scdn.net/stickershop/v1/product/24549195/LINEStorePC/main.png?v=1"
                      alt=""
                    />
                  </figure>
                  <div className=" flex flex-col">
                    <span>
                      <strong className=" font-bold">Número de Cédula: </strong>
                    </span>
                    <span>
                      <strong className=" font-bold">Nombre: </strong>
                    </span>
                    <span>
                      <strong className=" font-bold">Apellidos: </strong>
                    </span>
                    <span>
                      <strong className=" font-bold">
                        Fecha de Nacimiento:{" "}
                      </strong>
                    </span>
                    <span>
                      <strong className=" font-bold">
                        Fecha de Registro:{" "}
                      </strong>
                    </span>
                    <span>
                      <strong className=" font-bold">Dirección: </strong>
                    </span>
                  </div>
                </div>
                <div className="">
                  <Button color={"dark"} onClick={() => setOpenG(true)}>
                    Editar Información
                  </Button>
                </div>
              </div>
            </Card>
          </fieldset>
          <fieldset>
            <legend className=" text-2xl font-bold">
              Información de contacto
            </legend>
            <Card>
              <div className=" flex items-end justify-between">
                <div>
                  <div>
                    <strong className=" font-bold">Teléfono: </strong>
                  </div>
                  <div>
                    <strong className=" font-bold">Correo: </strong>
                  </div>
                </div>
                <div>
                  <Button color={"dark"} onClick={() => setOpenC(true)}>
                    Editar Información de contacto
                  </Button>
                </div>
              </div>
            </Card>
          </fieldset>

          <fieldset>
            <legend className=" font-bold text-2xl">Seguridad</legend>
            <Card>
              <div className=" flex items-end justify-between">
                <div>
                  <div>
                    <strong className=" font-bold">Contraseña </strong> <br />
                  </div>
                  <div>
                    <strong className=" font-bold">
                      Ultima modificacion:{" "}
                    </strong>{" "}
                    <br />
                  </div>
                </div>
                <div>
                  <Button color={"dark"} onClick={() => setOpenP(true)}>
                    Cambiar Contraseña
                  </Button>
                </div>
              </div>
            </Card>
          </fieldset>
        </div>
      </div>
      <MDEditGeneralInfo open={openG} setOpen={setOpenG} />
      <MDEditContacs open={openC} setOpen={setOpenC} />
      <MDVerifyPassword open={openP} setOpen={setOpenP} />
    </div>
  );
};

export default EditUserInfo;
