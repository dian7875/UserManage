import { Card } from "flowbite-react";

const UserInfo = () => {
  return (
    <>
      <Card className="w-96 hover:scale-105">
        <h5 className=" text-center text-2xl font-bold">Usuario Actual</h5>

        <figure className=" flex items-center justify-center">
          <img
            className=" rounded-full w-40 h-40"
            src="https://stickershop.line-scdn.net/stickershop/v1/product/24549195/LINEStorePC/main.png?v=1"
            alt=""
          />
        </figure>
        <div className=" flex flex-col items-start justify-start">
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
            <strong className=" font-bold">Fecha de Nacimiento: </strong>
          </span>
          <span>
            <strong className=" font-bold">Fecha de Registro: </strong>
          </span>
          <span>
            <strong className=" font-bold">Teléfono: </strong>
          </span>
          <span>
            <strong className=" font-bold">Correo: </strong>
          </span>
          <span>
            <strong className=" font-bold">Dirección: </strong>
          </span>
        </div>
      </Card>
    </>
  );
};

export default UserInfo;
