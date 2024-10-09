import { Breadcrumb } from "flowbite-react";
import { FaHome } from "react-icons/fa";
export const Homecrumbs = () => {
  return (
    <>
      <Breadcrumb.Item icon={FaHome} href="/">
        Inicio
      </Breadcrumb.Item>
    </>
  );
};
export const ChangePasswordcrumbs = () => {
  return (
    <>
      <Breadcrumb.Item className=" hover:cursor-default">
        Cambiar contraseña
      </Breadcrumb.Item>
    </>
  );
};
export const MyAcountcrumbs = () => {
  return (
    <>
      <Breadcrumb.Item className=" hover:cursor-default">
        Mi Cuenta
      </Breadcrumb.Item>
    </>
  );
};
export const Userscrumbs = () => {
  return (
    <>
      <Breadcrumb.Item className=" hover:cursor-default">
        Usuarios
      </Breadcrumb.Item>
    </>
  );
};
export const Rolescrumbs = () => {
  return (
    <>
      <Breadcrumb.Item className=" hover:cursor-default">Roles</Breadcrumb.Item>
    </>
  );
};
export const UserListscrumbs = () => {
  return (
    <>
      <Breadcrumb.Item className=" hover:cursor-default">
        Lista de usuarios
      </Breadcrumb.Item>
    </>
  );
};
export const RolListscrumbs = () => {
  return (
    <>
      <Breadcrumb.Item className=" hover:cursor-default">
        Lista de roles
      </Breadcrumb.Item>
    </>
  );
};
export const Helpcrumbs = () => {
  return (
    <>
      <Breadcrumb.Item className=" hover:cursor-default">Ayuda</Breadcrumb.Item>
    </>
  );
};
