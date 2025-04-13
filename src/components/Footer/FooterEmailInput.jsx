import React from 'react'

const FooterEmailInput = ({ placeholder }) => {
    return (
        <input className='p-4 border border-gray-400 rounded-full px-6 bg-white w-10/12' placeholder={placeholder} type="email" />
    )
}

export default FooterEmailInput