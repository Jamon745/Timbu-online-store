import { FaFacebook, FaInstagram, FaTiktok, FaX } from 'react-icons/fa6'
import Logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className="w-full h-auto px-1 md:h-[460px] lg::h-[460px] bg-secondary">
      <div data-aos="zoom-in" className='container flex flex-col justify-around object-center'>
            <div className="">
                  <img src={Logo} className='w-[200px] h-[200px] md:w-[287.35px] md:h-[256px] md:mt-[83px] ml-[28px]' alt="" />
            </div>
            <div className='grid grid-cols-2 gap-4 mx-2 md:mt-[83px] text-white border-b-2 border-white' >

                  {/* useful links */}
                  <div className='flex flex-col'>
                        <h1>INFORMATION</h1>
                        <a className='hover:border-b-2 border-blue-800 mt-2' href="#">About Us</a>
                        <a className='hover:border-b-2 border-blue-800 mt-2' href="#">Products</a>
                        <a className='hover:border-b-2 border-blue-800 mt-2' href="#">Categories</a>
                        <a className='hover:border-b-2 border-blue-800 mt-2' href="#">Delivery</a>
                  </div>
                  <div className='flex flex-col md:w-60'>
                        <h1>ADDRESS</h1>
                        <p className='mt-5'>Elegance Jewelry Boutique 123 Sparkle Avenue, Suite 456 Glamour City, Jewel State 78901 United States</p>
                  </div>
                  <div className='flex flex-col'>
                       <h1>MORE</h1>
                       <a className='mt-2 hover:border-b-2 border-blue-800' href="#">Blog</a>
                       <a className='mt-2 hover:border-b-2 border-blue-800' href="#">Media</a>
                       <a className='mt-2 hover:border-b-2 border-blue-800' href="#">Help Center</a>
                  </div>

                  {/* social media handles */}
                  <div className='flex flex-col '>
                        <h1>SOCIAL MEDIA</h1>
                        <div className='flex items-center gap-1 mt-2 hover:border-b-2 border-blue-800'>
                             <FaFacebook/>
                              <a  href="#">Facebook</a> 
                        </div>
                        <div className='flex items-center gap-3 mt-2 hover:border-b-2 border-blue-800'>
                              <FaInstagram/>
                              <a href="#">Instagram</a>
                        </div>
                        <div className='flex items-center gap-3 mt-2 hover:border-b-2 border-blue-800'>
                              <FaX/>
                              <a href="#">X</a>
                        </div>
                        <div className='flex items-center gap-3 mt-2 hover:border-b-2 border-blue-800'>
                              <FaTiktok/>
                              <a href="#">TikTok</a>
                        </div>
                        
                  </div>
                

            </div>
            
            </div>
            <div className="pb-3">
                  <h3 className='text-white text-center mt-3'>&copy; Jamon HNG 2024</h3>
            </div>
    </div>
  )
}

export default Footer