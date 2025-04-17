import React from 'react'

const NavbarSearchInput = ({ placeholder }) => {
    return (
        <input className='hidden md:flex focus:outline-0' type="text" placeholder={placeholder} />
    )
}

export default NavbarSearchInput