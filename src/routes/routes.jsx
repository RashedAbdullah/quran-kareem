import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import NotFound from "../pages/notFound/notFound";
import Home from "../pages/home/home";
import About from "./../pages/about/about";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export { routes };
