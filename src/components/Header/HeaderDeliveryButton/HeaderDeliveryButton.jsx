import React from 'react'

import HeaderDeliveryButtonIcon from './HeaderDeliveryButtonIcon';
import HeaderDeliveryButtonText from './HeaderDeliveryButtonText';
import HeaderDeliveryButtonImage from './HeaderDeliveryButtonImage';

const HeaderDeliveryButton = () => {
    return (
        <button className='py-2 gap-8 pl-6 flex items-center px-2 rounded-full bg-[#f5ddc4]'>
            <span className='flex items-center gap-2'>
                <HeaderDeliveryButtonIcon />
                <HeaderDeliveryButtonText />
            </span>
            <HeaderDeliveryButtonImage />
        </button>
    )
}

export default HeaderDeliveryButton