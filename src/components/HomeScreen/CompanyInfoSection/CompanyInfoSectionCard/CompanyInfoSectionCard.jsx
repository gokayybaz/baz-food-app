import React from 'react'

import CompanyInfoSectionCardIcon from "./CompanyInfoSectionCardIcon"
import CompanyInfoSectionCardTitle from "./CompanyInfoSectionCardTitle"
import CompanyInfoSectionCardSubTitle from './CompanyInfoSectionCardSubTitle'

const CompanyInfoSectionCard = ({ Icon, title, subTitle }) => {
    return (
        <div className='flex flex-col  items-center gap-2'>
            <span className='flex w-max p-4 bg-amber-500 rounded-full'>
                <CompanyInfoSectionCardIcon Icon={Icon} />
            </span>
            <CompanyInfoSectionCardTitle title={title} />
            <CompanyInfoSectionCardSubTitle subTitle={subTitle} />
        </div>
    )
}

export default CompanyInfoSectionCard