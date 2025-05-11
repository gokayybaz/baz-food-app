import React from 'react'

import CustomerSaysSectionTitle from './CustomerSaysSectionTitle'
import CustomerSaysSectionSubTitle from './CustomerSaysSectionSubTitle'

const CustomerSaysSectionTextArea = ({ title, subTitle }) => {
    return (
        <div className='flex gap-2 flex-col text-center'>
            <CustomerSaysSectionTitle title={title} />
            <CustomerSaysSectionSubTitle subTitle={subTitle} />
        </div>
    )
}

export default CustomerSaysSectionTextArea