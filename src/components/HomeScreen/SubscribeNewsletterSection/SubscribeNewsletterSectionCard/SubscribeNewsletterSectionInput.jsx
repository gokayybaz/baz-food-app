import React from 'react'

const SubscribeNewsletterSectionInput = ({ placeHolder }) => {
    return (
        <input className='focus:outline-none w-full' type="email" placeholder={placeHolder} />
    )
}

export default SubscribeNewsletterSectionInput