import {  FaSearch, FaShoppingBag } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <div>
          <img src={Logo} className="cursor-pointer" alt="" />
        </div>

        {/* navbar items */}
        <ul className="flex items-center justify-around gap-6 cursor-pointer">
          <li className="cursor-pointer text-xl hover:border-b-2 hover:border-secondary hover:text-primary">
            Home
          </li>
          <li className="cursor-pointer text-xl hover:border-b-2 hover:border-secondary hover:text-primary">
            About
          </li>
          <li className="cursor-pointer text-xl hover:border-b-2 hover:border-secondary hover:text-primary">
            Categories
          </li>
          <li className="cursor-pointer text-xl hover:border-b-2 hover:border-secondary hover:text-primary">
            Contact
          </li>
        </ul>
        {/* navbar icons */}
        <div className="flex items-center gap-4">
          <FaSearch />
          <FaShoppingBag />
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
