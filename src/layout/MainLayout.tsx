import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
        <Navbar />
            <main>{children}</main>
        <Footer />
    </>
  );
};

export default MainLayout;