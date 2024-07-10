import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
// import { OtherProductsData } from "./OtherProductsData";
import { useNavigate } from "react-router-dom";

const OtherProducts = () => {
  const navigate = useNavigate();
  const [Products, setProducts] = useState([]);

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

   const handleOrder = (e) => {
    e.preventDefault();
    navigate('/cart')
  }
  return (
    <div className="py-5">
      <h1 className="text-xl lg:text-3xl font-bold mx-6 lg:mx-28 mt-3 lg:mt-20">Other Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Products.map((product) => (
          <div
            data-aos="zoom-in"
            key={product.id}
            className="mx-auto pb-10 mt-10 hover:border-4 border-blue-700"
          >
            {product && product.photos && product.photos.length > 0 && (
              <img className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] md:w-[300px] md:h-[300px] rounded-2xl cursor-pointer"
              src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.photos[0].filename}
              />
            )}
            <FaHeart className="text-primary text-xl hover:translate-y-1 bg-white rounded-full p-1 absolute -mt-64 ml-60" />
            <div className="mx-28 text-left">
              <p className="mt-2">
                {product.name}
              </p>
              <h3 className="flex items-center font-semibold hover:border-2 w-8 border-b-secondary">
               NGN: <span>{product.current_price[0].NGN}</span>
              </h3>
            </div>
            <div className="text-center">
                  <button onClick={handleOrder}  className="border border-gray-400 text-center text-2xl px-4">- 2 +</button>
                  <button onClick={handleOrder}  className="border-4 border-gray-400 text-center text-2xl px-4">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OtherProducts;
