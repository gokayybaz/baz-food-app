import React from 'react'
import NavbarButton from './NavbarButton'

const NavbarButtons = () => {
    return (
        <ul className='hidden md:flex items-center gap-12'>
            <NavbarButton title={"Anasayfa"} />
            <NavbarButton title={"Günlük Menümüz"} />
            <NavbarButton title={"Hizmetlerimiz"} />
            <NavbarButton title={"Mağazalarımız"} />
        </ul>
    )
}

export default NavbarButtons