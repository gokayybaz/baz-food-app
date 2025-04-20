import React from 'react'

import Header from '../components/Header/Header';
import CompanyInfoSection from '../components/CompanyInfoSection/CompanyInfoSection'
import MostPopularProductsSection from '../components/MostPopularProductsSection/MostPopularProductsSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import HowToWorkSection from '../components/HowToWorkSection/HowToWorkSection';
import CustomerSaysSection from '../components/CustomerSaysSection/CustomerSaysSection'
import SubscribeNewsletterSection from '../components/SubscribeNewsletterSection/SubscribeNewsletterSection';

const Home = () => {
    return (
        <>
            <Header />
            <CompanyInfoSection />
            <MostPopularProductsSection />
            <ServicesSection />
            <HowToWorkSection />
            <CustomerSaysSection />
            <SubscribeNewsletterSection />
        </>
    )
}

export default Home