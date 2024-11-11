import { Breadcrumb, Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { Homecrumbs, Rolescrumbs, RolListscrumbs } from "../../../Components/Breadcrumbs";
import MDNewRol from "./Modals/MDNewRol";
import RollTable from "./RollTable";

const RollLists = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Breadcrumb className=" custom-breadcrumb">
        <Homecrumbs />
        <Rolescrumbs />
        <RolListscrumbs />
      </Breadcrumb>
      <section className="w-full flex flex-col justify-center items-center mt-12">
        <div className=" w-4/5 flex flex-col gap-5">
          <div className=" flex justify-between">
            <TextInput
              placeholder="Buscar rol"
              className=" w-64"
              rightIcon={FaSearchengin}
            />
            <Button color="dark" onClick={() => setOpen(true)}>
              Añadir nuevo rol
            </Button>
          </div>
          <RollTable />
        </div>
      </section>
      <MDNewRol open={open} setOpen={setOpen} />
    </>
  );
};

export default RollLists;
