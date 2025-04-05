import React from 'react'

const NavbarButton = ({ title }) => {
    return (
        <li className='cursor-pointer select-none hover:underline underline-offset-8'>{title}</li>

    )
}

export default NavbarButton