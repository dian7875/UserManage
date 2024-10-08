import { Breadcrumb } from "flowbite-react";
import { Homecrumbs } from "../Components/Breadcrumbs";
import UserInfo from "../Components/UserInfo";
import Counters from "../Components/Counters";

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
            <Counters />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
