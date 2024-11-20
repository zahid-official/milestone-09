import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Learn from "../Pages/Learn";
import Tutorials from "../Pages/Tutorials";
import About from "../Pages/About";
import MainLayout from "../Layout/MainLayout";
import Lesson from "../Components/Learn/Lesson";

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
        loader: ()=> fetch('./categories.json'),
      },
      {
        path: "/learn/lesson/:id",
        element: <Lesson></Lesson>,
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
