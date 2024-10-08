import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./Routes";
import { RouterProvider } from "react-router";


function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routes} />
      </QueryClientProvider>
    </>
  );
}

export default App;
