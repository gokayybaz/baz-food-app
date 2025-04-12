import React from 'react'

import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

import CustomerSaysSectionCardButton from './CustomerSaysSectionCardButton'
import CustomerSaysSectionCard from './CustomerSaysSectionCard/CustomerSaysSectionCard';


const CustomerSaysSectionCardArea = () => {
    const user = {
        fullName: 'Gökay Baz',
        role: 'CEO @bazsoftware',
    }
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veritatis nesciunt fugiat, tempora in aliquid animi ad consequuntur adipisci nostrum voluptates quia ipsa repellat exercitationem atque sit, minus officia harum!'
    return (
        <div className='w-1/2'>
            <div className='flex items-center justify-between gap-12'>
                <CustomerSaysSectionCardButton ButtonIcon={CgChevronLeft} />
                <CustomerSaysSectionCard profileInfo={user} text={text} />
                <CustomerSaysSectionCardButton ButtonIcon={CgChevronRight} />
            </div>
        </div>
    )
}

export default CustomerSaysSectionCardArea