// import './App.css'logo.png

import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Products from "./Components/Pages/Products"

function App() {

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
