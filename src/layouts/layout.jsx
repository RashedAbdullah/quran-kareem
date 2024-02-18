import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div dir="rtl" className=" bg-secondary font-hafs">
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
