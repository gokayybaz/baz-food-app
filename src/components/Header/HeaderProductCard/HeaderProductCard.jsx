import React from 'react'

import HeaderProductCardImage from './HeaderProductCardImage'
import HeaderProductCardTitle from './HeaderProductCardTitle'
import HeaderProductCardSubtitle from './HeaderProductCardSubtitle'

const HeaderProductCard = ({ image, title, description }) => {
    return (
        <div className='shadow-xl hover:scale-105 transition-all cursor-pointer flex flex-col justify-around  relative rounded-2xl'>
            <HeaderProductCardImage image={image} />
            <div></div>
            <div className='flex md:mt-0 mt-24 md:p-0 p-2 flex-col items-center text-center justify-center'>
                <HeaderProductCardTitle title={title} />
                <HeaderProductCardSubtitle description={description} />
            </div>
        </div>
    )
}

export default HeaderProductCard