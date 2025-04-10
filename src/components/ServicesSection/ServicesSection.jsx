import React from 'react'

import ServicesSectionTitleArea from './ServicesSectionTitleArea/ServicesSectionTitleArea';
import ServicesSectionCardArea from './ServicesSectionCardArea';

const ServicesSection = () => {
    return (
        <section className='mt-25 px-36'>
            <ServicesSectionTitleArea />
            <ServicesSectionCardArea />
        </section>
    )
}

export default ServicesSection