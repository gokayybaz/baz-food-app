import React from 'react'

const ProductCardAddBasketButton = ({ title }) => {
    return (
        <button className='p-4 py-2 cursor-pointer bg-transparent hover:bg-amber-500 transition-all hover:text-white rounded-full text-amber-600 border '>{title}</button>

    )
}

export default ProductCardAddBasketButton