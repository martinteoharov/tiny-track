import { ModeToggle } from "../mode-toggle";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full m-0 bg-opacity-80 bg-[var(--color-bg-navbar)] backdrop-blur-md fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4 group">
            <span className="text-xl px-5 font-bold text-gray-900 dark:text-gray-300 self-center">
              <Link
                to="/"
                className="text-m transition duration-300 ease-in-out flex items-center h-full hover:text-blue-500 dark:hover:text-gray-300"
              >
                tiny-track
              </Link>
            </span>
            <Link
              to="/dashboard"
              className="text-sm px-4 transition duration-300 ease-in-out flex items-center h-full hover:text-blue-500 dark:hover:text-gray-300"
            >
              Dashboard
            </Link>

            <Link
              to="/auth"
              className="text-sm px-4 transition duration-300 ease-in-out flex items-center h-full hover:text-blue-500 dark:hover:text-gray-300"
            >
              Login
            </Link>
          </div>

          <div className="flex items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
