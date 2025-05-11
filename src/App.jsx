import Navbar from './components/Navbar/Navbar'

import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (

    <div className='h-screen min-h-screen'>
      <Navbar />
      {/* <Home /> */}
      <ProductDetail />
      <Footer />
    </div >

  )
}

export default App
