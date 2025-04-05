import React from 'react'

const NavbarSearchInput = ({ placeholder }) => {
    return (
        <input className='focus:outline-0' type="text" placeholder={placeholder} />
    )
}

export default NavbarSearchInput