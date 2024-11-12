import { Drawer, Sidebar } from "flowbite-react";
import { Dispatch, SetStateAction, useContext } from "react";
import pingu from "../../assets/Icon.png";
import SidebarContext from "../../Context/NavbarContext/NavbarContext";
const Navbar = ({
  openSide,
  setOpenSide,
}: {
  openSide: boolean;
  setOpenSide: Dispatch<SetStateAction<boolean>>;
}) => {
  const { handleNavigation, handleClose } = useContext(SidebarContext);
  return (
    <>
      <Drawer open={openSide} onClose={() => setOpenSide(false)}>
        <Drawer.Header
          title="Gestión de usuarios y roles"
          titleIcon={() => (
            <img src={pingu} width={30} className="mr-2" alt=""></img>
          )}
        />
        <Drawer.Items>
          <Sidebar className="[&>div]:bg-transparent w-full [&>div]:p-0 pt-3 ">
            <Sidebar.ItemGroup>
              <Sidebar.Item
                onClick={() => (handleNavigation("MiCuenta"), handleClose)}
              >
                Cuenta
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                onClick={() => (
                  handleNavigation("Lista_de_Usuarios"), handleClose
                )}
              >
                Lista de usuarios
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => (
                  handleNavigation("Lista_de_Roles"), handleClose
                )}
              >
                Lista de Roles
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                onClick={() => (handleNavigation("Ayuda"), handleClose)}
              >
                Ayuda
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Navbar;
