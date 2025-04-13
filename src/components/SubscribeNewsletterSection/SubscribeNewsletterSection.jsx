import React from 'react'


import SubscribeNewsletterSectionImage from './SubscribeNewsletterSectionImage';
import BurgerImage from '../../assets/images/subscribe-newsletter-images/burger.svg'
import SubscribeNewsletterSectionCard from './SubscribeNewsletterSectionCard/SubscribeNewsletterSectionCard';


const SubscribeNewsletterSection = () => {
    return (
        <section className='mt-25 px-36'>
            <div className='bg-black h-80  p-18 rounded-4xl flex justify-between items-center'>
                <SubscribeNewsletterSectionImage image={BurgerImage} />
                <SubscribeNewsletterSectionCard cardTitle={"Haber Bültenimize Abone Ol"} cardDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque provident soluta quasi rerum, ex eligendi quia quas amet tempore?"} />
            </div>
        </section>
    )
}

export default SubscribeNewsletterSection