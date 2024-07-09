import { FaArrowLeftLong, FaCaretDown, FaStar } from "react-icons/fa6";
import CartProduct1 from '../../assets/Images/Rectangle 6.png'
import { useNavigate } from "react-router-dom";

const Checkout = () => {
      const navigate = useNavigate();

      const goBackToCart = (e) =>{
            e.preventDefault();
            navigate('/cart')
      }
  return (
    <div className="h-[100vh] w-full mx-auto container my-16">
      <div onClick={goBackToCart} className="flex items-center gap-2 -mt-10 cursor-pointer">
        <FaArrowLeftLong />
        <h1 className="font-bold text-2xl">CHECKOUT</h1>
      </div>

      <div className="flex mt-6 ">
        {/* customer information section */}
        <div className="border-r-2 border-gray-500 mr-2 pr-2">
            <h2 className="font-semibold text-lg">Personal Information</h2>
          <div className="flex gap-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="firstName">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Jamon"
                className="px-4 py-2 rounded-lg w-72"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Jamon"
                className="px-4 py-2 rounded-lg w-72"
              />
            </div>
          </div>


          <div className="flex gap-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="Number">
                Phone Numbere <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="+234-806-749-7822"
                className="px-4 py-2 rounded-lg w-72"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="jamon@gmail.com"
                className="px-4 py-2 rounded-lg w-72"
              />
            </div>
            
           </div>
            {/* shipping information */}
           <h2 className="font-semibold text-lg mt-12"> Shipping information</h2>
           <div className="flex gap-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="country">
                Country <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Canada"
                className="px-4 py-2 rounded-lg w-72"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="state">
                State <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Lagos"
                className="px-4 py-2 rounded-lg w-72"
              />
            </div>
            
           </div>
           <div className="flex gap-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="text">
                City <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Ikeja"
                className="px-4 py-2 rounded-lg w-72"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text">
                Zip Code <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter zip code"
                className="px-4 py-2 rounded-lg w-72"
              />
            </div>
           </div>

           {/* Payment Information */}
           <h2 className="font-semibold text-lg mt-4">Payment Information</h2>
           <h5 className="flex items-center">Debit/Credit Card <FaCaretDown/></h5>

           <div className="flex flex-col mt-2">
              <label htmlFor="text">
                Card Number <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="1234567890"
                className="px-4 py-2 rounded-lg w-full"
              />
            </div>
           <div className="flex gap-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="text">
                Expiry Date <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="px-4 py-2 rounded-lg w-72"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text">
                CVV <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                placeholder="cvv"
                className="px-4 py-2 rounded-lg w-72"
              />
            </div>
           </div>
           <button className="bg-primary px-6 py-2 text-white w-40 mt-5 mx-44 hover:bg-primary/75">DONE</button>
          </div>
          {/* cart items section */}
        <div>
            <h2 className="font-bold text-lg">Order Summary</h2>
            <div className="flex mt-2 items-center pl-3 py-2 ">
            {/* product name section */}
            <img
              className="w-[93px] h-[93px]"
              src={CartProduct1}
              alt=""
            />
            <div className="flex items-center px-2">
              <div className="flex flex-col px-2">
                <h3 className="font-semibold">3 in 1 Necklace</h3>
                <div className="flex items-center gap-2 mx-2">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
              </div>

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
              <button className="border border-gray-400 px-1 ml-8">
                - 2 +
              </button>

              {/* Price section */}
              <h3 className="ml-10 font-semibold flex items-center gap-2">
                $30.00 <span className="text-lg">X</span>
              </h3>
            </div>
          </div>
            <div className="flex mt-2 items-center pl-3 py-2 ">
            {/* product name section */}
            <img
              className="w-[93px] h-[93px]"
              src={CartProduct1}
              alt=""
            />
            <div className="flex items-center px-2">
              <div className="flex flex-col px-2">
                <h3 className="font-semibold">3 in 1 Necklace</h3>
                <div className="flex items-center gap-2 mx-2">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
              </div>

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
              <button className="border border-gray-400 px-1 ml-8">
                - 2 +
              </button>

              {/* Price section */}
              <h3 className="ml-10 font-semibold flex items-center gap-2">
                $30.00 <span className="text-lg">X</span>
              </h3>
            </div>
          </div>
            <div className="flex mt-2 items-center pl-3 py-2 ">
            {/* product name section */}
            <img
              className="w-[93px] h-[93px]"
              src={CartProduct1}
              alt=""
            />
            <div className="flex items-center px-2">
              <div className="flex flex-col px-2">
                <h3 className="font-semibold">3 in 1 Necklace</h3>
                <div className="flex items-center gap-2 mx-2">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
              </div>

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
              <button className="border border-gray-400 px-1 ml-8">
                - 2 +
              </button>

              {/* Price section */}
              <h3 className="ml-10 font-semibold flex items-center gap-2">
                $30.00 <span className="text-lg">X</span>
              </h3>
            </div>
          </div>
            <div className="flex mt-2 items-center pl-3 py-2 ">
            {/* product name section */}
            <img
              className="w-[93px] h-[93px]"
              src={CartProduct1}
              alt=""
            />
            <div className="flex items-center px-2">
              <div className="flex flex-col px-2">
                <h3 className="font-semibold">3 in 1 Necklace</h3>
                <div className="flex items-center gap-2 mx-2">
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                  <FaStar className="text-primary" />
                </div>
              </div>

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
              <button className="border border-gray-400 px-1 ml-8">
                - 2 +
              </button>

              {/* Price section */}
              <h3 className="ml-10 font-semibold flex items-center gap-2">
                $30.00 <span className="text-lg">X</span>
              </h3>
            </div>
          </div>
            <div className="border-t-2 border-b-2 border-gray-500">
                  <div className="flex items-center justify-between text-xl font-bold"> 
                        <h2>SubTotal:</h2>
                        <h3>$90.00</h3>
                  </div>
                  <div className="flex items-center justify-between text-xl font-bold"> 
                        <h2>Total:</h2>
                        <h3>$90.00</h3>
                  </div>
            </div>
        </div>
        </div>

        
      </div>
  );
};

export default Checkout;
