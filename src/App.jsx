import './App.css'


import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import CompanyInfoSection from './components/CompanyInfoSection/CompanyInfoSection'
import MostPopularProductsSection from './components/MostPopularProductsSection/MostPopularProductsSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import HowToWorkSection from './components/HowToWorkSection/HowToWorkSection';
import CustomerSaysSection from './components/CustomerSaysSection/CustomerSaysSection'
import SubscribeNewsletterSection from './components/SubscribeNewsletterSection/SubscribeNewsletterSection';




function App() {
  return (
    <>
      <Navbar />
      <div className='h-screen min-h-screen '>
        <Header />
        <CompanyInfoSection />
        <MostPopularProductsSection />
        <ServicesSection />
        <HowToWorkSection />
        <CustomerSaysSection />
        <SubscribeNewsletterSection />
        <div className='flex mt-4 h-24'></div>
      </div>
    </>
  )
}

export default App
