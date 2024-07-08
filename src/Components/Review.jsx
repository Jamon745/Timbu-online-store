import { FaArrowRightLong } from 'react-icons/fa6'
import ReviewImg from '../assets/Images/Rectangle 23.png'

const Review = () => {
  return (
      <div>
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
  )
}

export default Review