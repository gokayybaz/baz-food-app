import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import CompanyInfoSection from './components/CompanyInfoSection/CompanyInfoSection'
import MostPopularProductsSection from './components/MostPopularProductsSection/MostPopularProductsSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import HowToWorkSection from './components/HowToWorkSection/HowToWorkSection';
import CustomerSaysSection from './components/CustomerSaysSection/CustomerSaysSection'
import SubscribeNewsletterSection from './components/SubscribeNewsletterSection/SubscribeNewsletterSection';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <div className='h-screen min-h-screen'>
        <Header />
        <CompanyInfoSection />
        <MostPopularProductsSection />
        <ServicesSection />
        <HowToWorkSection />
        <CustomerSaysSection />
        <SubscribeNewsletterSection />
        <Footer />
      </div >
    </>
  )
}

export default App
