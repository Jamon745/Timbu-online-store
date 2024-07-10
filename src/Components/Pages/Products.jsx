import { useState, useEffect } from "react";
import axios from "axios";
import { FaCartPlus, FaHeart, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner";
import Vector1 from "../../assets/Images/Vector.png";
import Vector2 from "../../assets/Images/fa-solid_shipping-fast.png";
import Vector3 from "../../assets/Images/subway_tick.png";
import Vector4 from "../../assets/Images/flowbite_wallet-solid.png";
import GuidianImg from "../../assets/Images/Shopping girl using shopping card.png";
import Pagination from "../Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const navigate = useNavigate();

  const ApiUrl = "https://timbu-get-all-products.reavdev.workers.dev/";

  useEffect(() => {
    const fetchProducts = async () => {
      const apiUrl = ApiUrl;
      const organizationId = "f5f579d92c5e47218e1a3588382830d0";
      const appId = "FOTPETKDSPEWBGG";
      const apiKey = "21b7738a5d8742d89296d555c233b33d20240712210128899983";

      try {
        const response = await axios.get(apiUrl, {
          params: {
            organization_id: organizationId,
            Appid: appId,
            Apikey: apiKey,
          },
        });
        console.log("API Response:", response.data);
        setProducts(response.data.items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const openCart = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const handleOrder = (e) => {
    e.preventDefault();
    navigate("/otherProducts");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const { length: count } = products;

  if (count === 0) return <p>There are no products in the database.</p>;

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProducts = products.slice(startIndex, startIndex + pageSize);

  return (
    <div className="bg-[#ece6d3] lg:h-auto pb-10 md:pb-0">
      <Banner />

      {/* Service benefits section */}
      <div className="grid grid-cols-2 container mx-auto bg-[#d9d9d9] h-[250px] rounded-2xl md:flex lg:flex md:items-center lg:items-center md:justify-center lg:justify-center text-center mt-[950px] md:mt-10 lg:mt-10 lg:pb-20">
        <div
          data-aos="zoom-in"
          className="flex flex-col p-1 border-r-2 border-gray-500 w-[200px] md:w-[300px] lg:w-[400px]"
        >
          <img
            className="bg-white rounded-full p-1 self-center"
            src={Vector1}
            alt=""
          />
          <h4 className="font-semibold">Original</h4>
          <p>Meticulous craftsmanship, true authentic beauty.</p>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col p-1 md:border-r-2 lg:border-r-2 border-gray-500 w-[180px] md:w-[300px] lg:w-[400px]"
        >
          <img
            className="bg-white rounded-full p-1 self-center"
            src={Vector2}
            alt=""
          />
          <h4 className="font-semibold">Shipping</h4>
          <p>Enjoy fast, reliable worldwide shipping.</p>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col border-r-2 border-gray-500 w-[200px] md:w-[300px] lg:w-[400px]"
        >
          <img
            className="bg-white rounded-full self-center"
            src={Vector3}
            alt=""
          />
          <h4 className="font-semibold">Fast Payment</h4>
          <p>Experience secure and swift payments.</p>
        </div>

        <div
          data-aos="zoom-in"
          className="flex flex-col px-6 w-[200px] md:w-[300px] lg:w-[400px]"
        >
          <img
            className="bg-white rounded-full p-1 self-center"
            src={Vector4}
            alt=""
          />
          <h4 className="font-semibold">Affordable</h4>
          <p>Luxury jewelry at affordable prices.</p>
        </div>
      </div>

      {/* Products section */}
      <div className="pb-10">
        <h1 className="text-center font-bold text-2xl mt-12">Our Products</h1>
        {/* Product categories */}
        <ul className="flex flex-wrap lg:flex-row items-center gap-2 lg:gap-6 lg:justify-evenly lg:mt-10 h-10">
          <li className="bg-primary w-20 rounded-lg px-2 py-2 text-center hover:border-2 hover:border-secondary">
            All
          </li>
          {[
            "Laptops",
            "Cars",
            "Necklace",
            "Wristwatches",
            "Leg Chains",
            "Bangles",
            "Nose Rings",
          ].map((category, index) => (
            <li key={index} className="hover:border-b-2 hover:border-secondary">
              {category}
            </li>
          ))}
        </ul>
        {/* Products grid */}
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="mx-auto pb-10 mt-10"
              data-aos="zoom-in"
            >
              {product && product.photos && product.photos.length > 0 && (
                <img
                  src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                  className="w-[300px] h-[300px] hover:border-4 border-secondary rounded-2xl cursor-pointer"
                  alt={product.photos[0].filename}
                />
              )}

              <FaHeart className="text-primary text-xl hover:translate-y-1 bg-white rounded-full p-1 absolute -mt-44 -ml-50 gap-2 lg:-mt-64 lg:ml-60" />
              <p className="font-semibold">{product.name}</p>
              <div className="flex items-center justify-between">
                <h3 className="flex items-center justify-between gap-1 font-semibold hover:border-2 w-8 border-b-secondary">
                  NGN: <span>{product.current_price[0].NGN}</span>
                </h3>
                <FaCartPlus
                  onClick={openCart}
                  className="text-primary/75 hover:border-2 border-secondary cursor-pointer w-8 bg-white rounded-full p-1 text-3xl"
                />
              </div>
              <p className="flex items-center justify-between text-justify line-clamp-2 mt-2">
                {product.description}{" "}
              </p>
              
            </div>
          ))}
        </div>
        <Pagination itemCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>

      {/* How to order section */}
      <div className="bg-white py-10">
        <div className="flex container mx-auto">
          <div>
            <h1 className="text-center text-4xl uppercase font-semibold">
              How to Order
            </h1>
            <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
              <FaArrowRight className="text-primary" />
              Explore our exquisite range of jewelry pieces
            </p>
            <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
              <FaArrowRight className="text-primary" />
              Click on the desired item to view details
            </p>
            <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
              <FaArrowRight className="text-primary" />
              Click &aposAdd to Cart&apos to place the item in your shopping cart
            </p>
            <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
              <FaArrowRight className="text-primary" />
              Click &aposCheckout&apos; to start the payment process
            </p>
            <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
              <FaArrowRight className="text-primary" />
              Provide your shipping address and contact details
            </p>
            <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
              <FaArrowRight className="text-primary" />
             </p>
             <button
                onClick={handleOrder}
                className="bg-primary text-white hover:bg-primary/75 py-1 px-2 ml-40 mt-10"
              >
                Order Now
              </button>
            </div>

            <div data-aos="zoom-in" className="mx-auto">
              <img src={GuidianImg} height="551.18px" width="370px" alt="" />
            </div>
          </div>
        </div>
      </div>
  );
}
export default Products;