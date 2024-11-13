import { Card } from "flowbite-react";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../../Context/UserContex/UserContext";
import Loanding from "../../../assets/Loanding.gif"

const UserInfo = () => {
  const { currentUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      setLoading(true); 
    } else {
      setLoading(false); 
    }
  }, [currentUser]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={Loanding} alt="Loading..." className="w-32 h-32" />
      </div>
    );
  }


  if (!currentUser) {
    return <div>No hay usuario logueado</div>;
  }
  

  return (
    <>
      <Card className="w-96 hover:scale-105">
        <h5 className="text-center text-2xl font-bold">Usuario Actual</h5>

        <figure className="flex items-center justify-center">
          <img
            className="rounded-full w-40 h-40"
            src="https://stickershop.line-scdn.net/stickershop/v1/product/24549195/LINEStorePC/main.png?v=1"
            alt="User Avatar"
          />
        </figure>
        <div className="flex flex-col items-start justify-start">
          <span>
            <strong className="font-bold">Número de Cédula: </strong> 
            {currentUser.cedula}
          </span>
          <span>
            <strong className="font-bold">Nombre: </strong> {
            currentUser.name}
          </span>
          <span>
            <strong className="font-bold">Apellidos: </strong> 
            {currentUser.lastName}
          </span>
          <span>
            <strong className="font-bold">Teléfono: </strong>
            {currentUser.phone}
          </span>
          <span>
            <strong className="font-bold">Correo: </strong> 
            {currentUser.email}
          </span>
          <span>
            <strong className="font-bold">Dirección: </strong> 
            {currentUser.address}
          </span>
        </div>
      </Card>
    </>
  );
};

export default UserInfo;
