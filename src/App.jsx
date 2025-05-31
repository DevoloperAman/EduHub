import NavBar_Routes from '../public/AllRoutes/NavBar_Routes'
import Contents from './Components/Contents'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Footer'
import Cource_Routes from '../public/AllRoutes/Cource_Routes'

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 ">

        <Navbar />
        <div className="pt-20 px-4   ">
          <NavBar_Routes />
          <Cource_Routes />

        </div>

        <Contents />


      </div>

      <Footer />

      {/* this is for the Scroll to top when ever we click on nay nav link  */}
      <ScrollToTop />



    </>
  )
}

export default App