import {  FaSearch } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const goToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const goToAbout = (e) => {
    e.preventDefault();
    navigate("/banner");
  };

  const goToProducts = (e) => {
    e.preventDefault();
    navigate("/otherProducts");
  };

  const goToCart = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* logo */}
        <div>
          <img src={Logo} className="cursor-pointer w-24" alt="Logo" onClick={goToHome} />
        </div>

        {/* navbar toggle button for small screens */}
        <div onClick={toggleNavbar} className="md:hidden lg:hidden cursor-pointer text-2xl">
          {isOpen ? '' : <FaBars />}
        </div>

        {/* navbar items */}
        <ul
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 md:space-y-0 md:space-x-8 md:flex md:flex-row md:static md:bg-transparent md:items-center transition-transform transform h-1/2 md:h-full ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 z-50`}
        >
          <FaTimes onClick={toggleNavbar} className="absolute top-[14%] right-[34%] md:hidden text-xl"/>
          <li onClick={goToHome} className="cursor-pointer text-xl hover:text-primary md:hover:border-b-2 md:hover:border-secondary" >
            Home
          </li>
          <li onClick={goToAbout} className="cursor-pointer text-xl hover:text-primary md:hover:border-b-2 md:hover:border-secondary">
            About
          </li>
          <li onClick={goToProducts} className="cursor-pointer text-xl hover:text-primary md:hover:border-b-2 md:hover:border-secondary">
            Categories
          </li>
          <li onClick={goToAbout} className="cursor-pointer text-xl hover:text-primary md:hover:border-b-2 md:hover:border-secondary">
            Contact
          </li>
        </ul>

        {/* navbar icons */}
        <div className="hidden md:flex items-center gap-4">
          <FaSearch className="cursor-pointer" />
          <FaCartPlus onClick={goToCart} className="cursor-pointer text-primary" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;