import Vector1 from "../../assets/Images/Vector.png";
import Vector2 from "../../assets/Images/fa-solid_shipping-fast.png";
import Vector3 from "../../assets/Images/subway_tick.png";
import Vector4 from "../../assets/Images/flowbite_wallet-solid.png";
import { ProductData } from "./ProductData";
import { FaBagShopping } from "react-icons/fa6";

const Products = () => {
  return (
    <div className="bg-[#ece6d3] h-auto">

      {/* section for displaying service benefits to our Customers */}

      <div className="w-[1276px] mx-auto bg-[#d9d9d9] h-[275px] rounded-2xl flex items-center justify-center text-center mt-10">
        <div className="flex flex-col p-1 border-r-2 border-gray-500 px-4 w-[225px]">
          <img
            className="bg-white rounded-full p-1 self-center"
            src={Vector1}
            alt=""
          />
          <h4 className="font-semibold">Original</h4>
          <p>Meticulous craftsmanship, true authentic beauty.</p>
        </div>

        <div className="flex flex-col p-1 border-r-2 border-gray-500 px-4 w-[225px]">
          <img
            className="bg-white rounded-full p-1 self-center"
            src={Vector2}
            alt=""
          />
          <h4 className="font-semibold">Shipping</h4>
          <p>Enjoy fast, reliable worldwide shipping.</p>
        </div>

        <div className="flex flex-col p-1 border-r-2 border-gray-500 px-4 w-[225px]">
          <img
            className="bg-white rounded-full p-1 self-center"
            src={Vector3}
            alt=""
          />
          <h4 className="font-semibold">Fast Payment</h4>
          <p>Experience secure and swift payments.</p>
        </div>

        <div className="flex flex-col w-[225px]">
          <img
            className="bg-white rounded-full p-1 self-center px-4"
            src={Vector4}
            alt=""
          />
          <h4 className="font-semibold">Affordable</h4>
          <p>Luxury jewelry at affordable prices.</p>
        </div>
      </div>

      {/* Products */}
      <div>
            <h1 className="text-center font-bold text-2xl mt-12 ">Our Products</h1>
            <ul className="flex items-center gap-6 justify-evenly">
                  <li>All</li>
                  <li>Necklace</li>
                  <li>Earings</li>
                  <li>Wristwatches</li>
                  <li>Leg Chains</li>
                  <li>Bangles</li>
                  <li>Nose Rings</li>
            </ul>
            <div className="grid grid-cols-4">

            {ProductData.map((data) => (
                  <div key={data.id} className="mx-auto mt-10">
                        <img src={data.img} width="300px" height="300px" alt="" />
                        <p className="flex items-center justify-between mt-3">{data.description} <FaBagShopping className="text-primary/50 bg-white rounded-full p-1 text-xl"/></p>
                        <h3 className="font-semibold">{data.price}</h3>
                  </div>
            ))}
      </div>

      </div>
    </div>
  );
};

export default Products;
