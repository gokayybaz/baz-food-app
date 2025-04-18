import React from 'react'

import SubscribeNewsletterSectionCardTitle from './SubscribeNewsletterSectionCardTitle'
import SubscribeNewsletterSectionCardSubTitle from './SubscribeNewsletterSectionCardSubTitle'
import SubscribeNewsletterSectionCardInputIcon from './SubscribeNewsletterSectionCardInputIcon'
import SubscribeNewsletterSectionCardInput from './SubscribeNewsletterSectionInput'
import SubscribeNewsletterSectionCardSubscribeButton from './SubscribeNewsletterSectionCardSubscribeButton'

import { MdOutlineEmail } from 'react-icons/md';


const SubscribeNewsletterSectionCard = ({ cardTitle, cardDescription }) => {
    return (
        <span className='md:w-5/12 p-8 px-7 flex flex-col gap-5'>
            <SubscribeNewsletterSectionCardTitle title={cardTitle} />
            <SubscribeNewsletterSectionCardSubTitle subTitle={cardDescription} />
            <span className='flex rounded-3xl justify-between items-center bg-white md:p-4 pl-4'>
                <div className='flex w-[80%] gap-2 md:gap-4'>
                    <SubscribeNewsletterSectionCardInputIcon Icon={MdOutlineEmail} iconSize={24} />
                    <SubscribeNewsletterSectionCardInput placeHolder={"E-Posta Adresinizi Giriniz..."} />
                </div>
                <SubscribeNewsletterSectionCardSubscribeButton title={"Abone Ol"} />
            </span>
        </span>
    )
}

export default SubscribeNewsletterSectionCard