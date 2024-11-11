import { Avatar, DarkThemeToggle, Dropdown } from "flowbite-react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./Navbar";

const Header = () => {
  const [openSide, setOpenSide] = useState<boolean>(false);

  const logginURL = import.meta.env.VITE_API_AUTH_URL;
  const ClientURL = import.meta.env.VITE_API_CLIENT_URL;

  const goToLogin = () => {
    window.location.href = `${logginURL}/?redirect=${encodeURIComponent(
      ClientURL
    )}`;
  };
  return (
    <>
      <header
        className=" flex items-center justify-between w-full h-20 bg-black sticky
       dark:bg-gray-900"
      >
        <div
          className="text-white ml-4 hover:scale-105 cursor-pointer"
          onClick={() => setOpenSide(true)}
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
              <span className="block text-sm">Nombre de usuario</span>
              <span className="block truncate text-sm font-medium">Correo</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Editar Perfil</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={goToLogin}>Iniciar Sesión</Dropdown.Item>
          </Dropdown>
        </div>
      </header>
      <Navbar openSide={openSide} setOpenSide={setOpenSide} />
    </>
  );
};

export default Header;