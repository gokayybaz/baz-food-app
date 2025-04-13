import React from 'react'

const FooterSocialMediaIcon = ({ Icon }) => {
    return (
        <span className='p-2 cursor-pointer hover:bg-amber-400 bg-amber-300 border rounded-full text-amber-800'>
            <Icon size={24} />
        </span>
    )
}

export default FooterSocialMediaIcon