import React from 'react'

import NavbarLogo from './NavbarLogo';
import NavbarButtons from './NavbarButtons';
import NavbarSearchIcon from './NavbarSearch/NavbarSearchIcon';
import NavbarSearchInput from './NavbarSearch/NavbarSearchInput';
import NavbarBasketButton from './NavbarBasketButton';
import { MdMenu } from 'react-icons/md';


const Navbar = () => {
    const iconSize = 24

    return (
        <nav className='flex border-b-1 border-gray-100 px-7 md:px-24 py-8 items-center justify-between'>
            {/* Navbar Left Area */}

            <NavbarLogo />

            <div className='flex items-center md:gap-38'>
                {/* Navbar Center Area */}
                <div>
                    <NavbarButtons />

                </div>
                {/* Navbar Right Area */}
                <div className='flex items-center gap-2'>
                    <button className='md:hidden flex items-center justify-center p-3 border border-gray-300 rounded-full shadow-2xl'>
                        <MdMenu size={19} />
                    </button>
                    <div className='scale-85 flex md:scale-100 px-3 gap-4 items-center p-2 bg-white shadow-2xl border-gray-300 rounded-lg border'>
                        <NavbarSearchIcon iconSize={iconSize} />
                        <NavbarSearchInput placeholder={"Aramak için yazınız..."} />
                        <span className='flex gap-3 items-center'>
                            <hr className='h-8 w-[1px] border-none bg-gray-500' />
                            <NavbarBasketButton iconSize={iconSize} />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar