import { Card } from "flowbite-react";
import { FaUserTie } from "react-icons/fa6";

const UserCounter = () => {
  return (
    <>
      <Card className=" hover:scale-105">
        <div className=" flex gap-3 items-center">
          <FaUserTie size={120} />
          <div>
            <h5 className=" font-bold text-xl">Conteo de usuarios</h5>
            <h5 className=" font-bold text-xl">0</h5>
          </div>
        </div>
      </Card>
    </>
  );
};

export default UserCounter;
