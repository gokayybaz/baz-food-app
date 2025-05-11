import React from 'react'

import HowToWorkSectionCardImage from './HowToWorkSectionCardImage'
import HowToWorkSectionCardTitle from './HowToWorkSectionCardTitle'
import HowToWorkSectionCardSubTitle from './HowToWorkSectionCardSubTitle'

const HowToWorkSectionCard = ({ flexType, cardImage, cardImageAltText, cardTitle, cardDescription }) => {
    return (
        <div className={`flex flex-col md:${flexType} justify-between`}>
            <HowToWorkSectionCardImage image={cardImage} imageAltText={cardImageAltText} />
            <div className={`md:${flexType == 'flex-col' ? 'mt-4' : 'mb-4'} mt-8 flex items-center justify-center flex-col text-center`}>
                <HowToWorkSectionCardTitle title={cardTitle} />
                <HowToWorkSectionCardSubTitle subTitle={cardDescription} />
            </div>
        </div>
    )
}

export default HowToWorkSectionCard