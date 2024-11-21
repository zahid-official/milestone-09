import { NavLink, Link } from "react-router-dom";
import logo from "/assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li className="text-lg font-semibold mx-0.5 hover:text-[#0683a2]">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-lg font-semibold mx-0.5 hover:text-[#0683a2]">
        <NavLink to={"/learn"}>Start Learning</NavLink>
      </li>
      <li className="text-lg font-semibold mx-0.5 hover:text-[#0683a2]">
        <NavLink to={"/tutorials"}>Tutorials</NavLink>
      </li>
      <li className="text-lg font-semibold mx-0.5 hover:text-[#0683a2]">
        <NavLink to={"about"}>About Us</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <p>
            <Link to="/" className="flex gap-3 items-center text-4xl font-bold">
              <img src={logo} alt="" /> <span className="mt-2">Elex</span>
            </Link>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          <Link to={'/login'}>
            <button className="btn custom-btn text-xl h-14 sm:px-16">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
