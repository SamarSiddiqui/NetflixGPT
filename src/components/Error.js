import { useRouteError } from "react-router";
import { Netflix_Logo } from "../utils/constants";
import { Link } from "react-router-dom";

const Error = () => {
  const { error } = useRouteError();

  return (
    <div className="flex items-center justify-center text-white h-screen text-center">
      <div className="bg-black/20 w-1/2 h-1/2 shadow-2xl shadow-gray-500/20 mb-5 smallerTab:w-[80%]">
        <div className="flex justify-center">
          <img src={Netflix_Logo} className="w-40" alt="Netflix Logo" />
        </div>
        <div className="pb-5">
          <h1 className="text-[clamp(20px,3.5vw,25px)] my-3">Something went wrong</h1>
          <p className="m-1 text-[clamp(12px,3.5vw,20px)]">
            Sorry, we're having trouble with your request. {error?.message}
          </p>
          <Link to="/browse">
            <button className="bg-red-700 p-2 w-1/2 m-5 text-[clamp(12px,3.5vw,20px)] rounded-md">
              Return to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
