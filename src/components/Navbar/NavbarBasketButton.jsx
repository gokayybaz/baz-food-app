import React from 'react'

import { IoCart } from "react-icons/io5";


const NavbarBasketButton = ({ iconSize }) => {
    return (
        <button>
            <IoCart size={iconSize} />
        </button>
    )
}

export default NavbarBasketButton