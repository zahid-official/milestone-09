import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Learn from "../Pages/Learn";
import Tutorials from "../Pages/Tutorials";
import About from "../Pages/About";
import MainLayout from "../Layout/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/learn",
        element: <Learn></Learn>,
      },
      {
        path: "/tutorials",
        element: <Tutorials></Tutorials>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default Router;
