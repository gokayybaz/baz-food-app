import React from 'react'
import ProductAddBasketButtonIcon from './ProductAddBasketButtonIcon'

const ProductAddBasketButton = () => {
    return (
        <button className='p-4 w-full justify-center md:w-max md:justify-start  px-4  cursor-pointer text-white flex items-center font-medium rounded-lg shadow-lg transition-all hover:scale-101   bg-gradient-to-b from-amber-500 to-orange-600'><ProductAddBasketButtonIcon /> Sepete Ekle</button>

    )
}

export default ProductAddBasketButton