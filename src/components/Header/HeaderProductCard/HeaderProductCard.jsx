import React from 'react'

import HeaderProductCardImage from './HeaderProductCardImage'
import HeaderProductCardTitle from './HeaderProductCardTitle'
import HeaderProductCardSubtitle from './HeaderProductCardSubtitle'

const HeaderProductCard = ({ image }) => {
    return (
        <div className='shadow-xl hover:scale-105 transition-all cursor-pointer flex flex-col justify-around  relative rounded-2xl'>
            <HeaderProductCardImage image={image} />
            <div></div>
            <div className='flex flex-col items-center text-center justify-center'>
                <HeaderProductCardTitle />
                <HeaderProductCardSubtitle />
            </div>
        </div>
    )
}

export default HeaderProductCard