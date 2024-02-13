import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const Layout = () => {
  return (
    <div dir="rtl" className="bg-[#64CCC5]">
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
