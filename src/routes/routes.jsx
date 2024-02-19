import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import SingleSurah from "../pages/surah/signgleSurah";
import SideBarSurahNames from "../pages/surah/sidebarSurahName";
import Layout from "../layouts/layout";
import ThemeProvider from "../contexts/themeProvider";

const translation = "bn.bengali";
const routes = createBrowserRouter([
  {
    element: (
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    ),
    errorElement: <h2>404 NOT FOUND</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singleSurah",
        element: <SideBarSurahNames />,
        loader: () =>
          fetch(`https://api.alquran.cloud/v1/quran/${translation}`),
        children: [
          {
            path: "/singleSurah/:id",
            element: <SingleSurah />,
            loader: ({ params }) =>
              fetch(
                `https://api.alquran.cloud/v1/quran/${translation}/${params.id}`
              ),
          },
        ],
      },
    ],
  },
]);

export { routes };
