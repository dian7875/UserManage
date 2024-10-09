import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./Users/Components/Layout/Layout";
import Home from "./Users/Screens/Home";
import UserAccount from "./Users/Screens/UserAccount";
import UserList from "./Users/Screens/UserList";

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
        element: <UserList/>
      },
      {
        path: "Lista_de_Roles",
      },
      {
        path: "Ayuda",
      },
    ],
  },
]);

export default Routes;