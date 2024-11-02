import { Breadcrumb } from "flowbite-react";
import { Homecrumbs } from "../Components/Breadcrumbs";
import UserInfo from "../Features/User/Component/UserInfo";
import UserCounter from "../Features/User/Component/UserCounter";
import RoleCounter from "../Features/Role/Components/RoleCounter";

const Home = () => {
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
              <UserCounter />
              <RoleCounter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
