import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMap, FaBars, FaTimes } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    logOut().then();
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "All", path: "/all-book" },
    { link: "Donate", path: "/donate" },
    { link: "Borrow Book", path: "/borrow" },
    { link: "Donation Book", path: "/add-book" },
    { link: "Dashboard", path: "/admin/dashboard" },
    { link: "Login", path: "/login" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md dark:bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaMap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">Boi Bazar</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.link}
                to={item.path}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {item.link}
              </Link>
            ))}
            
            {user && (
              <button
                onClick={handleLogout}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Logout
              </button>
            )}
            
            <button
              onClick={handleToggle}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={handleToggle}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mr-2"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.link}
              to={item.path}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.link}
            </Link>
          ))}
          {user && (
            <button
              onClick={handleLogout}
              className="w-full text-left bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mt-2"
            >
              Logout
            </button>
          )}
        </div>
      </motion.div>
      
      {/* {user && (
        <div className="absolute bottom-0 right-0 mb-4 mr-4 bg-white dark:bg-gray-800 p-2 rounded shadow-md">
          <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
        </div>
      )} */}
    </motion.nav>
  );
};

export default Navbar;