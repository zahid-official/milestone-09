import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-[#c5f4ea] flex justify-center items-center">
      <div className="text-center space-y-2">
        <h2 className="text-6xl font-bold">Oops, This Page Not Found!</h2>
        <p className="text-4xl font-bold">The link might be corrupted.</p>
        <p className="text-2xl font-semibold">
          or the page may have been removed
        </p>
        <Link to={'/'}>
          <button className="btn px-16 custom-btn h-14 text-xl border-none">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
