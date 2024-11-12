import { Toaster } from "react-hot-toast";
import Routes from "./Routes";
import { RouterProvider } from "react-router";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;
