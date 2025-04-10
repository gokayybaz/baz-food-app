import React from 'react'

import ServicesSectionCardIcon from './ServicesSectionCardIcon'
import ServicesSectionCardTitle from './ServicesSectionCardTitle'
import ServicesSectionCardDescription from './ServicesSectionCardDescription'


const ServicesSectionCard = ({ Icon, title, description }) => {
    return (
        <div className='flex cursor-pointer flex-col p-12 items-center justify-between shadow-2xl hover:shadow-gray-300 transition-all shadow-gray-200 border border-gray-300 rounded-xl'>
            <ServicesSectionCardIcon Icon={Icon} />
            <span className='mt-8 flex flex-col gap-4 text-center'>
                <ServicesSectionCardTitle title={title} />
                <ServicesSectionCardDescription description={description} />
            </span>
        </div>
    )
}

export default ServicesSectionCard