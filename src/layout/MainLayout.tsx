import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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