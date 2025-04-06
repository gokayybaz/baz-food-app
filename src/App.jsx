import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import CompanyInfoSection from './components/CompanyInfoSection/CompanyInfoSection'



function App() {


  return (
    <>
      <Navbar />
      <div className='h-screen min-h-screen '>
        <Header />
        {/* Company Info Section */}
        <CompanyInfoSection />
        <div className='flex mt-4 h-24'></div>
      </div>
    </>
  )
}

export default App
