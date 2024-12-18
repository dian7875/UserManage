import { Avatar, DarkThemeToggle, Dropdown } from "flowbite-react";
import { useContext, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";
import UserContext from "../../Context/UserContex/UserContext";
import SidebarContext from "../../Context/NavbarContext/NavbarContext";
import UseLogOut from "../../Features/User/Hooks/UseLogOut";
import UseGetProfile from "../../Features/User/Hooks/UseGetProfile";

const Header = () => {
  const { currentUser } = useContext(UserContext);

  const { visible, showSidebar, handleClose } = useContext(SidebarContext);

  const { mutate: logOut } = UseLogOut();
  
  const getProfile = UseGetProfile();
  
  useEffect(() => {
    getProfile.mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const onConfirm = () => {
    logOut();
  };

  return (
    <>
      <>
        <header
          className=" flex items-center justify-between w-full h-20 bg-black sticky
      dark:bg-gray-900 z-40"
        >
          <div
            className="text-white ml-4 hover:scale-105 cursor-pointer"
            onClick={showSidebar}
          >
            <GiHamburgerMenu size={40} />
          </div>
          <DarkThemeToggle />
          <div className="mr-5">
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img="" rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{currentUser?.name} </span>
                <span className="block truncate text-sm font-medium">
                  {currentUser?.email}{" "}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Editar Perfil</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={onConfirm}>Cerrar Sesión</Dropdown.Item>
            </Dropdown>
          </div>
        </header>
        <Navbar openSide={visible} setOpenSide={handleClose} />
      </>
    </>
  );
};

export default Header;
