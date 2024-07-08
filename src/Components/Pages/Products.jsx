import Vector1 from "../../assets/Images/Vector.png";
import Vector2 from "../../assets/Images/fa-solid_shipping-fast.png";
import Vector3 from "../../assets/Images/subway_tick.png";
import Vector4 from "../../assets/Images/flowbite_wallet-solid.png";
import { ProductData } from "./ProductData";
import { FaArrowRightLong, FaBagShopping, FaHeart } from "react-icons/fa6";
import GuidianImg from "../../assets/Images/Shopping girl using shopping card.png";
import ReviewImg from "../../assets/Images/Rectangle 23.png";

const Products = () => {
  return (
    <div className="bg-[#ece6d3] h-auto">
      {/* section for displaying service benefits to our Customers */}

      <div className="container mx-auto bg-[#d9d9d9] h-[250px] rounded-2xl flex items-center justify-center text-center mt-10">
        <div data-aos="zoom-in"  className="flex flex-col p-1 border-r-2 border-gray-500 w-[300px]">
          <img
            className="bg-white rounded-full p-1 self-center"
            src={Vector1}
            alt=""
          />
          <h4 className="font-semibold">Original</h4>
          <p>Meticulous craftsmanship, true authentic beauty.</p>
        </div>

        <div data-aos="zoom-in"  className="flex flex-col p-1 border-r-2 border-gray-500  w-[300px]">
          <img
            className="bg-white rounded-full p-1 self-center"
            src={Vector2}
            alt=""
          />
          <h4 className="font-semibold">Shipping</h4>
          <p>Enjoy fast, reliable worldwide shipping.</p>
        </div>

        <div data-aos="zoom-in"  className="flex flex-col border-r-2 border-gray-500  w-[300px]">
          <img
            className="bg-white rounded-full self-center"
            src={Vector3}
            alt=""
          />
          <h4 className="font-semibold">Fast Payment</h4>
          <p>Experience secure and swift payments.</p>
        </div>

        <div data-aos="zoom-in"  className="flex flex-col px-6 w-[300px]">
          <img
            className="bg-white rounded-full p-1 self-center"
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
        <ul className="flex items-center gap-6 justify-evenly mt-10 h-10">
          <li className="bg-primary w-20 rounded-lg px-2 py-2 text-center hover:border-2 hover:border-secondary">
            All
          </li>
          <li className="hover:border-b-2 hover:border-secondary">Necklace</li>
          <li className="hover:border-b-2 hover:border-secondary">Earings</li>
          <li className="hover:border-b-2 hover:border-secondary">
            Wristwatches
          </li>
          <li className="hover:border-b-2 hover:border-secondary">
            Leg Chains
          </li>
          <li className="hover:border-b-2 hover:border-secondary">Bangles</li>
          <li className="hover:border-b-2 hover:border-secondary">
            Nose Rings
          </li>
        </ul>
        <div className="grid grid-cols-4">
          {ProductData.map((data) => (
            <div data-aos="zoom-in"  key={data.id} className="mx-auto mt-10">
              <img src={data.img} width="300px" height="300px" className="group-hover:scale-105 duration-300 drop-shadow-md cursor-pointer" alt="" />
              <FaHeart className="text-primary outline-transparent text-xl hover:translate-y-1 bg-white rounded-full p-1 absolute -mt-64 ml-60" />
              <p className="flex items-center justify-between mt-3">
                {data.description}{" "}
                <FaBagShopping className="text-primary/50 bg-white rounded-full p-1 text-xl" />
              </p>
              <h3 className="font-semibold">{data.price}</h3>
            </div>
          ))}
        </div>
        {/* How to order section */}
        <div className=" bg-white py-10">
          <div className="flex container mx-auto">
            {/* Steps to Order */}
            <div  >
              <h1 className="text-center text-4xl uppercase font-semibold">
                How to Order
              </h1>
              <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
                <FaArrowRightLong className="text-primary " />
                Explore our exquisite range of jewelry pieces
              </p>
              <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
                <FaArrowRightLong className="text-primary " />
                Click on the desired item to view details
              </p>
              <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
                <FaArrowRightLong className="text-primary " />
                Click &apos;Add to Cart&apos; to place the item in your shopping
                cart
              </p>
              <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
                <FaArrowRightLong className="text-primary " />
                Click &apos;Checkout&apos; to start the payment process
              </p>
              <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
                <FaArrowRightLong className="text-primary " />
                Provide your shipping address and contact details
              </p>
              <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
                <FaArrowRightLong className="text-primary " />
                Choose your payment method and enter the required details
              </p>
              <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
                <FaArrowRightLong className="text-primary " />
                Double-check all order details, including shipping and payment
                information.
              </p>
              <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
                <FaArrowRightLong className="text-primary " />
                Click &apos;Place Order&apos; to complete your purchase.
              </p>
              <p data-aos="fade-up" className="flex items-center gap-3 mt-4">
                <FaArrowRightLong className="text-primary " />
                You will receive an order confirmation email with tracking
                information.
              </p>
            </div>

            {/* order guidian images */}
            <div data-aos="zoom-in" className="mx-auto">
              <img src={GuidianImg} height="551.18px" width="370px" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Customer testimonial */}
      <div className="container mx-auto flex h-[50vh] mt-14">
        <div className="flex">
          <div data-aos="zoom-in" className="bg-secondary max-h-48 max-w-40 rounded-2xl mt-10">
            <img src={ReviewImg} className="mt-10 ml-14 relative" alt="" />
          </div>
          <div data-aos="fade-up" className="ml-72 max-w-[40vw]">
            <h1 className="text-gray-950 text-3xl font-bold ">Customer Review</h1>
            <p className="mt-20">I am absolutely thrilled with my purchase! The craftsmanship is exceptional, and the piece looks even more stunning in person. The entire ordering process was seamless, and my jewelry arrived quickly and beautifully packaged. I couldn&apos;t be happier and will definitely be a returning customer!</p>
            <FaArrowRightLong className="ml-[600px] text-primary cursor-pointer hover:translate-x-2"/>
            <h2 className="font-bold">Stephen G.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
