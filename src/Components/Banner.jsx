import BannerImg1 from "../assets/Images/Rectangle 1.png";
import BannerImg2 from "../assets/Images/Rectangle 5.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const goToProducts = (e) => {
    e.preventDefault();
    navigate('/otherProducts')
  }
  return (
    <div className="h-[75vh] md:h-[50vh] lg:h-[60vh] w-full bg-secondary ">
      <header className="container mx-auto flex flex-col md:flex-row">
            
        <div className="max-w-[100vw] px-3 md:px-0 md:max-w-[40vw]">
          <h2 className="text-white font-semibold text-3xl pt-12 pb-2">
            Discover Timeless Elegance and Craftsmanship in Every Piece
          </h2>
          <p className="text-white text-xl pb-2">
            Embrace your unique style with our exquisite jewelry, designed to
            illuminate your beauty and capture the essence of sophistication.
          </p>
          <button onClick={goToProducts} className="bg-primary mb-8 px-4 py-2 text-white hover:bg-primary/55">
            Discover Menu
          </button>

          <div className="bg-gray-500 w-[350px] md:w-[399px] h-[105px] rounded-lg flex px-6 py-2">
            <div className="bg-white rounded-xl px-2 m-2 text-center py-2 text-primary text-xl font-semibold hover:translate-x-1">
              15 <span className="text-gray-400 text-sm">Countries</span>
            </div>
            <div className="bg-white rounded-xl px-2 m-2 text-center py-2 text-primary text-xl font-semibold hover:translate-x-1">
              1.7k <span className="text-gray-400 text-sm">Reviews</span>
            </div>
            <div className="bg-white rounded-xl px-2 m-2 text-center py-2 text-primary text-xl font-semibold hover:translate-x-1">
              5k+ <span className="text-gray-400 text-sm">Customers</span>
            </div>
          </div>
        </div>

        {/* container for images */}
        <div className="flex flex-col md:flex-row lg:flex-row mx-auto gap-8 ">
          <img
            src={BannerImg2}
            className="mt-20 mb-8 w-[200px] h-[288px] lg:w-[300px] lg:h-[388px]"
            alt=""
          />
          <img src={BannerImg1} 
            className="mt-8 mb-20  w-[200px] h-[288px] lg:w-[300px] lg:h-[388px]" alt="" />
        </div>
      </header>
    </div>
  );
};

export default Banner;
