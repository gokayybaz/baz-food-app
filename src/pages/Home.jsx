import React from 'react'

import Header from '../components/Header/Header';
import CompanyInfoSection from '../components/HomeScreen/CompanyInfoSection/CompanyInfoSection'
import MostPopularProductsSection from '../components/HomeScreen/MostPopularProductsSection/MostPopularProductsSection';
import ServicesSection from '../components/HomeScreen/ServicesSection/ServicesSection';
import HowToWorkSection from '../components/HomeScreen/HowToWorkSection/HowToWorkSection';
import CustomerSaysSection from '../components/HomeScreen/CustomerSaysSection/CustomerSaysSection'
import SubscribeNewsletterSection from '../components/HomeScreen/SubscribeNewsletterSection/SubscribeNewsletterSection';

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