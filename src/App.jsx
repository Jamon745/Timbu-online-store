// import './App.css'logo.png
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Products from "./Components/Pages/Products";
import Review from "./Components/Review";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "./Components/Pages/Cart";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-[#ece6d3]">
        <Router>
            <Link><Navbar /></Link> 
          <Routes>
            <Route path="/" element={<Products />}/>
            <Route path="/review" element={<Review />}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
            <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
