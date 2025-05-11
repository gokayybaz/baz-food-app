import React from 'react'

import ServicesSectionTitleArea from './ServicesSectionTitleArea/ServicesSectionTitleArea';
import ServicesSectionCardArea from './ServicesSectionCardArea';

const ServicesSection = () => {
    return (
        <section className='m-4 md:m-0 mt-20 md:mt-25   md:px-36'>
            <ServicesSectionTitleArea />
            <ServicesSectionCardArea />
        </section>
    )
}

export default ServicesSection