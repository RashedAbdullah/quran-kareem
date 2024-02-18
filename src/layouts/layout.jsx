import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ThemeContext } from "../contexts/themeProvider";
import { useContext } from "react";

const Layout = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <div
      dir="rtl"
      className="bg-secondary font-hafs selection:first-letter:bg-green-600 selection:bg-secondary selection:text-textWhite"
    >
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
