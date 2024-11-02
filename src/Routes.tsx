import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Screens/Home";
import RollLists from "./Features/Role/Components/RollLists";
import UserAccount from "./Features/User/Screens/UserAccount";
import UserList from "./Features/User/Screens/UserList";

const Routes = createBrowserRouter([
  {
    path: "",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "MiCuenta",
        element: <UserAccount />,
      },
      {
        path: "Lista_de_Usuarios",
        element: <UserList />,
      },
      {
        path: "Lista_de_Roles",
        element: <RollLists />,
      },
      {
        path: "Ayuda",
      },
    ],
  },
]);

export default Routes;
