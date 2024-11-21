import { useContext, useRef } from "react";
import AuthContext from "./context";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  // useContext
  const { forget, resetEmail } = useContext(AuthContext);
  // useRef
  const emailRef = useRef();

  // handleResetEmail
  const handleResetEmail = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    resetEmail(email)
      .then(() => {
        window.location.href = "https://mail.google.com/";
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="py-28 flex justify-center">
      <div className="card bg-base-100 w-full max-w-md py-10 shrink-0 shadow-2xl">
        <form className="card-body">
          <h2 className="text-4xl mb-5 font-bold">Reset Password</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              ref={emailRef}
              defaultValue={forget}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              onClick={handleResetEmail}
              className="btn custom-btn text-lg font-bold h-14"
            >
              Reset Password
            </button>
          </div>

          <p className="mt-6">
            To reset your password, submit your email address below. An email
            will be sent to your email address, with instructions how to get
            access again.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
