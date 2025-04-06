import React from 'react'

import HeaderDeliveryButton from './HeaderDeliveryButton/HeaderDeliveryButton';
import HeaderTextArea from './HeaderTextArea/HeaderTextArea'
import HeaderButtons from './HeaderButtons/HeaderButtons'
import HeaderArrowImage from './HeaderArrowImage';
import HeaderProductCard from './HeaderProductCard/HeaderProductCard';

import Burger from '../../assets/images/burger.png'
import ComboMenu from '../../assets/images/combo-menu.png'
import Pizza from '../../assets/images/pizza.png'
import Cake from '../../assets/images/cake.png'


const Header = () => {
    return (
        <header className='flex align-center h-[78%] relative justify-between px-32 py-10 '>
            {/* Header Left Area */}
            <div className='w-2/3' >
                <HeaderDeliveryButton />
                <HeaderTextArea />
                <HeaderButtons />
            </div>

            {/* Header Center Area */}
            <div className='h-full absolute flex  bottom-8 left-5/12'>
                <HeaderArrowImage />
            </div>

            {/* Header Right Area */}
            <div className='grid h-full justify-center w-1/3  gap-8 gap-y-10 grid-cols-2'>
                <HeaderProductCard image={Burger} title={"Burger Menüleri"} description={`Lezzetli Etli ve Tavuklu Burger Menülerimiz`} />
                <HeaderProductCard image={ComboMenu} title={"Combo Menüleri"} description={"Lezzetli ve Bol Çeşitli Combo Menülerimiz"} />
                <HeaderProductCard image={Pizza} title={"Pizza Menüleri"} description={"Lezzetli ve Bol Çeşitli Pizza Menülerimiz"} />
                <HeaderProductCard image={Cake} title={"Tatlı Menüleri"} description={"Lezzetli ve Bol Çeşitli Tatlı Menülerimiz"} />
            </div>
        </header>
    )
}

export default Header