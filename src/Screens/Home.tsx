import { Breadcrumb, Card } from "flowbite-react";
import { Homecrumbs } from "../Components/Breadcrumbs";
import UserInfo from "../Features/User/Component/UserInfo";
import { FaUserTie } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { useQuery } from "react-query";
import { GetStats } from "../Services/AuthServices";
import { statistics } from "../Types/GlobalTypes";

const Home = () => {
  const { data: stats } = useQuery<statistics, Error>(
    ["RoleList", Date],
    () => GetStats(),
    {
      staleTime: 600,
    }
  );

  return (
    <>
      <div>
        <Breadcrumb className="custom-breadcrumb">
          <Homecrumbs />
        </Breadcrumb>
        <div className="w-full flex items-center justify-center mt-24">
          <div className="w-4/5 grid grid-cols-2">
            <UserInfo />
            <div className=" flex gap-4 flex-col justify-center">
              <Card className=" hover:scale-105">
                <div className=" flex gap-3 items-center">
                  <FaUserTie size={120} />
                  <div>
                    <h5 className=" font-bold text-xl">Conteo de usuarios</h5>
                    <h5 className=" font-bold text-xl">
                      {(stats && stats.totalUsers) || 0}
                    </h5>
                  </div>
                </div>
              </Card>
              <Card className=" hover:scale-105">
                <div className=" flex gap-3 items-center">
                  <FaUsersGear size={120} />
                  <div>
                    <h5 className=" font-bold text-xl">Conteo de roles</h5>
                    <h5 className=" font-bold text-xl">
                      {(stats && stats.totalRoles) || 0}
                    </h5>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
