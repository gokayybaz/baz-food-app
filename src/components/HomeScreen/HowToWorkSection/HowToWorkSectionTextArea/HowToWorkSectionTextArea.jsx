import React from 'react'

import HowToWorkSectionTitleText from './HowToWorkSectionTitleText'
import HowToWorkSectionSubTitleText from './HowToWorkSectionSubTitleText'

const HowToWorkSectionTextArea = ({ title, subTitle }) => {
    return (
        <div className='flex gap-2 flex-col text-center'>
            <HowToWorkSectionTitleText title={title} />
            <HowToWorkSectionSubTitleText subTitle={subTitle} />
        </div>
    )
}

export default HowToWorkSectionTextArea