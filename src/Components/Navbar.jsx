import {  FaSearch} from "react-icons/fa";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();

  const goToHome = (e) => {
    e.preventDefault();
    navigate("/")
  }
  const goToAbout = (e) => {
    e.preventDefault();
    navigate("/banner")
  }

  const goToProducts = (e) => {
    e.preventDefault();
    navigate("/otherProducts")
  }
  const goToCart = (e) => {
    e.preventDefault();
    navigate("/cart")
  }
  return (
    <div>
      <nav className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <div>
          <img src={Logo} className="cursor-pointer" alt="" />
        </div>

        {/* navbar items */}
        <ul className="flex items-center justify-around gap-6 cursor-pointer">
          <li onClick={goToHome} className="cursor-pointer text-xl hover:border-b-2 hover:border-secondary hover:text-primary">
            Home
          </li>
          <li onClick={goToAbout} className="cursor-pointer text-xl hover:border-b-2 hover:border-secondary hover:text-primary">
            About
          </li>
          <li onClick={goToProducts} className="cursor-pointer text-xl hover:border-b-2 hover:border-secondary hover:text-primary">
            Categories
          </li>
          <li onClick={goToAbout} className="cursor-pointer text-xl hover:border-b-2 hover:border-secondary hover:text-primary">
            Contact
          </li>
        </ul>
        {/* navbar icons */}
        <div className="flex items-center gap-4">
          <FaSearch />
          <FaCartPlus onClick={goToCart} className="text-primary"/>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
