import React from 'react'

import HeaderOrderNowButton from './HeaderOrderNowButton'
import HeaderOrderTrackingButton from './HeaderOrderTrackingButton'

const HeaderButtons = () => {
    return (
        <div className='mt-8 flex items-center gap-8'>
            <HeaderOrderNowButton />
            <HeaderOrderTrackingButton />
        </div>
    )
}

export default HeaderButtons