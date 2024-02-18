import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import SingleSurah from "../pages/surah/signgleSurah";
import SideBarSurahNames from "../pages/surah/sidebarSurahName";
import Layout from "../layouts/layout";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h2>404 NOT FOUND</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singleSurah",
        element: <SideBarSurahNames />,
        children: [
          {
            path: "/singleSurah/:id",
            element: <SingleSurah />,
          },
        ],
      },
    ],
  },
]);

export { routes };
