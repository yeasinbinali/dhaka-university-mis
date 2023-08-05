import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Events from "../../pages/Events/Events";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/News";
import BBA from "../../pages/Programs/BBA/BBA";
import DPHIL from "../../pages/Programs/DPHIL/DPHIL";
import EMBA from "../../pages/Programs/EMBA/EMBA";
import MBA from "../../pages/Programs/MBA/MBA";
import MPHIL from "../../pages/Programs/MPHIL/MPHIL";
import Tour from "../../pages/Tour/Tour";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/tour",
        element: <Tour></Tour>,
      },
      {
        path: "/bba",
        element: <BBA></BBA>,
      },
      {
        path: "/mba",
        element: <MBA></MBA>,
      },
      {
        path: "/emba",
        element: <EMBA></EMBA>,
      },
      {
        path: "/mphil",
        element: <MPHIL></MPHIL>,
      },
      {
        path: "/dphil",
        element: <DPHIL></DPHIL>,
      },
    ],
  },
]);
