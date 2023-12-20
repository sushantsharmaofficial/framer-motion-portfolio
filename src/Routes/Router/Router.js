import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Portfolios from "../../Pages/Home/Portfolio/Portfolios";
import ContactMe from "../../Pages/Home/ContactMe/ContactMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/port",
        element: <Portfolios />,
      },

      {
        path: "/contactme",
        element: <ContactMe />,
      },
    ],
  },
]);
