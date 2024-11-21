import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "./context";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  // useContext
  const { login, google, setUser } = useContext(AuthContext);
  // useLocation
  const location = useLocation();
  // useNavigate
  const navigate = useNavigate();

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // login
    login(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successful");
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => toast.error(error.message));
  };

  // handleGoogle
  const handleGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    google(googleProvider)
      .then(() => {
        toast.success("Sign In with Google Successful");
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="py-28 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl py-8">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-4xl font-bold mb-4">Sign In to Elex</h2>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />

            <label className="label">
              <Link className="label-text-alt link link-hover mt-2">
                Lost password?
              </Link>
            </label>
          </div>

          <div className="form-control mt-6">
            {/* submit button */}
            <button className="btn custom-btn text-xl font-bold h-14">
              Sign In
            </button>

            {/* google sign in */}
            <div className="divider py-5">or sign up with Google</div>
            <button
              type="button"
              onClick={handleGoogle}
              className="btn bg-black text-white text-lg font-bold h-14"
            >
              <FcGoogle size={30} />{" "}
              <span className="mt-1">Sign In with Google</span>
            </button>
          </div>
        </form>

        <p className="text-center">
          {`Don't have an account?`}
          <Link to={"/register"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
