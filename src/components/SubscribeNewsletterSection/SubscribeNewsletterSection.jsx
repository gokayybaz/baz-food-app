import React from 'react'


import SubscribeNewsletterSectionImage from './SubscribeNewsletterSectionImage';
import BurgerImage from '../../assets/images/subscribe-newsletter-images/burger.svg'
import SubscribeNewsletterSectionCard from './SubscribeNewsletterSectionCard/SubscribeNewsletterSectionCard';


const SubscribeNewsletterSection = () => {
    return (
        <section className='m-1 md:ml-0 md:mr-0 md:mb-0 md:px-36 mt-25'>
            <div className='bg-black md:h-80 md:p-18 rounded-4xl flex md:flex-row flex-col justify-between items-center'>
                <SubscribeNewsletterSectionImage image={BurgerImage} />
                <SubscribeNewsletterSectionCard cardTitle={"Haber Bültenimize Abone Ol"} cardDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque provident soluta quasi rerum, ex eligendi quia quas amet tempore?"} />
            </div>
        </section>
    )
}

export default SubscribeNewsletterSection