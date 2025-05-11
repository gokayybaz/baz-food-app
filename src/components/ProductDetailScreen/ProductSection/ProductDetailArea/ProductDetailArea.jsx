import React from 'react'

//TODO: Product Detail Area Component component ayrılacak (Completed: 11.05.2025 07:38).

import { BiBasket } from 'react-icons/bi'
import ProductInfoTextArea from './ProductInfoTextArea/ProductInfoTextArea'
import ProductMenuArea from './ProductMenuArea/ProductMenuArea'
import ProductAddBasketArea from './ProductAddBasketArea/ProductAddBasketArea'

const ProductDetailArea = () => {
    return (
        <div className='flex m-6 md:m-0 flex-col py-4 md:w-7/12'>
            <ProductInfoTextArea />
            <ProductMenuArea />
            <ProductAddBasketArea />
        </div>
    )
}

export default ProductDetailArea