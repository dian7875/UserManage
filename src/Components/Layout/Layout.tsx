import { ReactNode } from "react";
import Header from "./Header";
import SidebarProvider from "../../Context/NavbarProvider/NavProvider";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <Header />
        <main>{children}</main>
      </SidebarProvider>
    </>
  );
};

export default Layout;
