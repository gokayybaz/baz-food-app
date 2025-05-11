import React from 'react'
import ProductInfoTitleText from './ProductInfoTitleText'
import ProductInfoText from './ProductInfoText'

const ProductInfoTextArea = () => {
    return (
        <div className='flex flex-col gap-4'>
            <ProductInfoTitleText />
            <ProductInfoText />
        </div>
    )
}

export default ProductInfoTextArea