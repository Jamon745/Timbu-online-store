import { FaHeart } from "react-icons/fa6";
import { OtherProductsData } from "./OtherProductsData";

const OtherProducts = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mx-28 my-20 ">Other Products</h1>
      <div className="grid grid-cols-3">
        {OtherProductsData.map((data) => (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="mx-auto pb-10 mt-10 hover:border-4 border-blue-700"
          >
            <img
              src={data.img}
              width="300px"
              height="300px"
              className=" rounded-2xl cursor-pointer"
              alt=""
            />
            <FaHeart className="text-primary text-xl hover:translate-y-1 bg-white rounded-full p-1 absolute -mt-64 ml-60" />
            <div className="mx-28">
              <p className="flex items-center justify-between mt-2">
                {data.title}
              </p>
              <h3 className="font-semibold hover:border-2 w-8 border-b-secondary">
                {data.price}
              </h3>
            </div>
            <div className="text-center">
                  <button className="border border-gray-400 text-center text-2xl px-4">- 2 +</button>
                  <button className="border-4 border-gray-400 text-center text-2xl px-4">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OtherProducts;
