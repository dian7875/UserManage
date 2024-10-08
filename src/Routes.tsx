import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./Users/Components/Layout/Layout";
import Home from "./Users/Screens/Home";

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
        element:<Home/>
      },
      {
        path: "MiCuenta",
      },
      {
        path: "CambiarContraseña",
      },
      {
        path: "Lista_de_Usuarios",
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
