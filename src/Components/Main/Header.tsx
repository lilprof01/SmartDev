import { Link } from "react-router-dom";
import { ThemeToggle } from "../UI";
import { Home, UserCircleIcon, CodeXml } from "lucide-react";

const Header = () => {
  return (
    <header className="header fixed top-8 left-1/2 w-5/6 h-16 flex justify-center items-center bg-[#00000019] dark:bg-[#ffffff1b] transform -translate-x-1/2 rounded-full shadow-2xl backdrop-blur-lg z-50">
      <div className="flex sm:justify-between justify-center items-center w-full px-4">
        <Link
          to="/home"
          className="hidden sm:block text-xl font-bold cursor-pointer"
        >
          <span className="text-blue-600">&lt;/</span>Smart
          <span className="text-blue-600">&gt;</span>
        </Link>
        <div className="flex justify-between items-center align-middle gap-8 space-x-4">
          <Link to="/home">
            <Home
              size={30}
              className="hover:cursor-pointer hover:scale-120 transition-all duration-300 rounded-full"
            />
          </Link>
          <Link to="/about">
            <UserCircleIcon
              size={30}
              className="hover:cursor-pointer hover:scale-120 transition-all duration-300 rounded-full"
            />
          </Link>
          <Link to="/projects">
            <CodeXml
              size={30}
              className="hover:cursor-pointer hover:scale-120 transition-all duration-300 rounded-full"
            />
          </Link>
        </div>
        <ThemeToggle className="hidden sm:block hover:cursor-pointer hover:scale-120 transition-all duration-300 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
