import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import HouseArticle from "./Components/HouseArticle"
import Appartment from "./Components/Appartment"
import News from "./Components/News"
import Footer from "./Components/Footer"



function App() {
  return (
  <div className="flex justify-center overflow-hidden items-center flex-col ">
<Navbar/>
<Banner/>
<HouseArticle/>
<Appartment/>
<News/>
<Footer/>
  </div>
  )
}

export default App
