import { Breadcrumb } from "flowbite-react";
import { Homecrumbs } from "../../../Components/Breadcrumbs";
import EditUserInfo from "../../../Components/EditUserInfo";


const UserAccount = () => {
  return (
    <>
      <Breadcrumb className="custom-breadcrumb">
        <Homecrumbs />
      </Breadcrumb>
      <section>
        <EditUserInfo />
      </section>
    </>
  );
};

export default UserAccount;
