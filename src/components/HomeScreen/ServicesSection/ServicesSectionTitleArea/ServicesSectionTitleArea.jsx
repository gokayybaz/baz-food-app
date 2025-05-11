import React from 'react'
import ServicesSectionTitleText from './ServicesSectionTitleText'
import ServicesSectionSubTitleText from './ServicesSectionSubTitleText'

const ServicesSectionTitleArea = () => {
    return (
        <div className='flex gap-2 flex-col text-center'>
            <ServicesSectionTitleText title={"SERVİSLER"} />
            <ServicesSectionSubTitleText subTitle={"ÜRÜNLERİMİZ NASIL HAZIRLANIYOR?"} />
        </div>
    )
}

export default ServicesSectionTitleArea