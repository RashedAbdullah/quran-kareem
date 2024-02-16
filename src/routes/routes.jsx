import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/root";
import NotFound from "../pages/notFound/notFound";
import Home from "../pages/home/home";
import About from "./../pages/about/about";
import SingleSurah from "../pages/surah/signgleSurah";
import SideBarSurahNames from "../pages/surah/sidebarSurahName";
import ReadingAndTraslatetile from "../pages/surah/readingAndTraslateTitle";

const routes = createBrowserRouter([
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
        children: [
          {
            element: (
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                at esse doloremque ad quis corporis ea iure aut. In iure
                quisquam nesciunt, velit eligendi tempore reprehenderit sed
                cupiditate saepe sunt.
              </>
            ),
            path: "/singleSurah/:id/edit",
          },
        ],
      },
    ],
  },
]);

export { routes };
