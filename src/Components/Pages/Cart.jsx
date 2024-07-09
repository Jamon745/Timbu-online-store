import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import CartProduct1 from "../../assets/Images/Rectangle 6.png";
import OtherProducts from "./OtherProducts";

const Cart = () => {
  return (
    <div>
      <div className="flex justify-between h-[90vh] w-[80vw] mx-20 my-10">
        {/* cart items section */}
        <div className="border-gray-500 border-r-2 pr-2 w-[80vw]">
          <div className="flex gap-20 max-w-[70vw] border-b-2 border-gray-500">
            <h3 className="font-semibold">Product Name</h3>
            <h3 className="font-semibold ml-10">Description</h3>
            <h3 className="font-semibold ml-10 ">Bonus</h3>
            <h3 className="font-semibold ml-10 ">Quantity</h3>
            <h3 className="font-semibold ml-10 ">Price</h3>
          </div>

          <div className="flex mt-6 items-center  ">
            {/* product name section */}
            <img
              className="w-[110.88px] h-[110.88px]"
              src={CartProduct1}
              alt=""
            />
            <div className="flex items-center px-2">
              <div className="flex flex-col border-r-2 border-gray-500 px-2">
                <h3 className="font-semibold">3 in 1 Necklace</h3>
                <div className="flex items-center gap-2 mx-2">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
              </div>

              {/* Description section */}
              <p className="w-44 text-[0.6rem] px-2 border-r-2 border-gray-500">
                Versatile and elegant, our 3-in-1 necklace effortlessly
                transitions from day to night with its interchangeable styles,
                perfect for any occasion.
              </p>

              {/* Bonus Section */}
              <div className="flex flex-col">
                <div className="flex px-2 gap-4">
                  <p>$5.00</p>
                  <p>Sole</p>
                </div>
                <div className="flex px-2 gap-3">
                  <button className="bg-gray-400 px-1">50gr</button>
                  <button className="bg-primary px-1">-10%</button>
                </div>
              </div>

              {/* Quantity section */}
              <button className="border border-gray-400 px-4 ml-10">
                - 2 +
              </button>

              {/* Price section */}
              <h3 className="ml-10 font-semibold flex items-center gap-2">
                $30.00 <span className="text-lg">X</span>
              </h3>
            </div>
          </div>

          {/* second item in the cart */}
          <div className="flex mt-6 items-center bg-primary pl-3 py-2 ">
            {/* product name section */}
            <img
              className="w-[110.88px] h-[110.88px]"
              src={CartProduct1}
              alt=""
            />
            <div className="flex items-center px-2">
              <div className="flex flex-col border-r-2 border-gray-500 px-2">
                <h3 className="font-semibold">3 in 1 Necklace</h3>
                <div className="flex items-center gap-2 mx-2">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
              </div>

              {/* Description section */}
              <p className="w-44 text-[0.6rem] px-2 border-r-2 border-gray-500">
                Versatile and elegant, our 3-in-1 necklace effortlessly
                transitions from day to night with its interchangeable styles,
                perfect for any occasion.
              </p>

              {/* Bonus Section */}
              <div className="flex flex-col">
                <div className="flex px-2 gap-4">
                  <p>$5.00</p>
                  <p>Sole</p>
                </div>
                <div className="flex px-2 gap-3">
                  <button className="bg-gray-100 px-1">50gr</button>
                  <button className="bg-primary px-1">-10%</button>
                </div>
              </div>

              {/* Quantity section */}
              <button className="border border-gray-400 px-4 ml-8">
                - 2 +
              </button>

              {/* Price section */}
              <h3 className="ml-10 font-semibold flex items-center gap-2">
                $30.00 <span className="text-lg">X</span>
              </h3>
            </div>
          </div>

          {/* third item in the Cart */}
          <div className="flex mt-6 items-center border-b-2 border-gray-500 ">
            {/* product name section */}
            <img
              className="w-[110.88px] h-[110.88px]"
              src={CartProduct1}
              alt=""
            />
            <div className="flex items-center px-2">
              <div className="flex flex-col border-r-2 border-gray-500 px-2">
                <h3 className="font-semibold">3 in 1 Necklace</h3>
                <div className="flex items-center gap-2 mx-2">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
              </div>

              {/* Description section */}
              <p className="w-44 text-[0.6rem] px-2 border-r-2 border-gray-500">
                Versatile and elegant, our 3-in-1 necklace effortlessly
                transitions from day to night with its interchangeable styles,
                perfect for any occasion.
              </p>

              {/* Bonus Section */}
              <div className="flex flex-col">
                <div className="flex px-2 gap-4">
                  <p>$5.00</p>
                  <p>Sole</p>
                </div>
                <div className="flex px-2 gap-3">
                  <button className="bg-gray-400 px-1">50gr</button>
                  <button className="bg-primary px-1">-10%</button>
                </div>
              </div>

              {/* Quantity section */}
              <button className="border border-gray-400 px-4 ml-8">
                - 2 +
              </button>

              {/* Price section */}
              <h3 className="ml-10 font-semibold flex items-center gap-2">
                $30.00 <span className="text-lg">X</span>
              </h3>
            </div>
          </div>

          {/* 4th item in the Cart */}
          <div className="flex mt-6 items-center border-b-2 border-gray-500  ">
            {/* product name section */}
            <img
              className="w-[110.88px] h-[110.88px]"
              src={CartProduct1}
              alt=""
            />
            <div className="flex items-center px-2">
              <div className="flex flex-col border-r-2 border-gray-500 px-2">
                <h3 className="font-semibold">3 in 1 Necklace</h3>
                <div className="flex items-center gap-2 mx-2">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
              </div>

              {/* Description section */}
              <p className="w-44 text-[0.6rem] px-2 border-r-2 border-gray-500">
                Versatile and elegant, our 3-in-1 necklace effortlessly
                transitions from day to night with its interchangeable styles,
                perfect for any occasion.
              </p>

              {/* Bonus Section */}
              <div className="flex flex-col">
                <div className="flex px-2 gap-4">
                  <p>$5.00</p>
                  <p>Sole</p>
                </div>
                <div className="flex px-2 gap-3">
                  <button className="bg-gray-400 px-1">50gr</button>
                  <button className="bg-primary px-1">-10%</button>
                </div>
              </div>

              {/* Quantity section */}
              <button className="border border-gray-400 px-4 ml-8">
                - 2 +
              </button>

              {/* Price section */}
              <h3 className="ml-10 font-semibold flex items-center gap-2">
                $30.00 <span className="text-lg">X</span>
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-4 my-4">
            <button className="bg-primary px-12 py-1 text-white">
              Checkout
            </button>
            <p className="flex items-center gap-2 mx-36">
              Continue Shopping <FaArrowRightLong />
            </p>
            <h2 className="ml-10 font-semibold text-lg">
              Total: <span className="text-[0.8rem]">$250.00</span>
            </h2>
          </div>
        </div>
        {/* Ordering section */}
        <div className="w-[30vw] ml-10">
          <h3 className="font-bold mb-2">Ordering</h3>

          <div>
            <h3>CHOOSE DELIVERY TYPE</h3>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <label htmlFor="checkbox">By Courier</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <label htmlFor="checkbox">Pickup Station</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <label htmlFor="checkbox">By Partner</label>
            </div>
          </div>

          <div className="mt-14">
            <h3>TIME OF DELIVERY</h3>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <label htmlFor="checkbox">As soon as possibler</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <label htmlFor="checkbox">Nearest delivery</label>
            </div>
            <div className="flex items-center gap-2">
            <input type="radio" />
              <label htmlFor="checkbox">On a specific date: </label>
              <input type="date" />
              
            </div>

            <div className="mt-14">
            <h3>MODE OF PAYMENT</h3>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <label htmlFor="checkbox">Card</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <label htmlFor="checkbox">Pay on delivery</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <label htmlFor="checkbox">Bank transfer</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" />
              <label htmlFor="checkbox">Voucher</label>
            </div>
          </div>
          </div>
        </div>
        
      </div>
      <OtherProducts className='mt-28'/>
    </div>
  );
};

export default Cart;
