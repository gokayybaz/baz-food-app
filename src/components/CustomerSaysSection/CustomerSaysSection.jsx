import React from 'react'

import CustomerSaysSectionTextArea from './CustomerSaysSectionTextArea/CustomerSaysSectionTextArea'
import FastFoodImage from '../../assets/images/client-says-images/fast-food-image.svg'
import CustomerSaysSectionImage from './CustomerSaysSectionImage';
import CustomerSaysSectionCardArea from './CustomerSaysSectionCardArea/CustomerSaysSectionCardArea'

const CustomerSaysSection = () => {
    return (
        <section className='mt-25 px-36'>
            <CustomerSaysSectionTextArea title={"MÜŞTERİ GERİ BİLDİRİMLERİ"} subTitle={"MÜŞTERİLERİMİZ NELER DİYOR?"} />
            <div className='flex w-full mt-8 items-center justify-between'>
                <CustomerSaysSectionCardArea />
                <CustomerSaysSectionImage image={FastFoodImage} />
            </div>
        </section>
    )
}

export default CustomerSaysSection