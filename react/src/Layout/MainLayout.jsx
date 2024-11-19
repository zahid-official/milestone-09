import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>
      </header>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
