import { Card } from "flowbite-react";
import { FaUsersGear } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
const Counters = () => {
  return (
    <div className=" flex gap-4 flex-col justify-center">
      <Card className=" hover:scale-105">
        <div className=" flex gap-3 items-center">
          <FaUserTie size={120} />
          <div>
            <h5 className=" font-bold text-xl">Conteo de usuarios</h5>
            <h5 className=" font-bold text-xl">0</h5>
          </div>
        </div>
      </Card>

      <Card className=" hover:scale-105">
        <div className=" flex gap-3 items-center">
          <FaUsersGear size={120} />
          <div>
            <h5 className=" font-bold text-xl">Conteo de roles</h5>
            <h5 className=" font-bold text-xl">0</h5>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Counters;
