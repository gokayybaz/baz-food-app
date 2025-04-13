import React from 'react'

const FooterLink = ({ link }) => {
    return (
        <li className='cursor-pointer hover:underline underline-offset-6 text-base font-medium text-gray-500'>{link}</li>
    )
}

export default FooterLink