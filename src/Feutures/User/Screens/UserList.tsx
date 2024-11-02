import { Breadcrumb, Button, TextInput } from "flowbite-react";
import { FaSearchengin } from "react-icons/fa";
import { useState } from "react";
import { Homecrumbs, Userscrumbs, UserListscrumbs } from "../../../Components/Breadcrumbs";
import MDNewUser from "../../../Features/User/Component/Modals/MDNewUser";
import UsersTable from "../../../Features/User/Component/UsersTable";


const UserList = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Breadcrumb className=" custom-breadcrumb">
        <Homecrumbs />
        <Userscrumbs />
        <UserListscrumbs/>
      </Breadcrumb>
      <section className="w-full flex flex-col justify-center items-center mt-12">
        <div className=" w-4/5 flex flex-col gap-5">
          <div className=" flex justify-between">
            <Button color="dark" onClick={() => setOpen(true)}>
              Registrar Nuevo Usuario
            </Button>
            <TextInput
              placeholder="Buscar usuario por nombre"
              className=" w-64"
              rightIcon={FaSearchengin}
            />
          </div>
          <UsersTable />
        </div>
      </section>
      <MDNewUser open={open} setOpen={setOpen} />
    </>
  );
};

export default UserList;
