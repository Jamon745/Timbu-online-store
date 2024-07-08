// import './App.css'logo.png
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Products from "./Components/Pages/Products"

function App() {

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100
    })
    AOS.refresh()
  },[])
  return (
    <>
      <div className="bg-[#ece6d3]">
        <Navbar />
        <Banner/>
        <Products/>
      </div>
    </>
  )
}

export default App
