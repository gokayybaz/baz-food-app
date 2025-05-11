import React from 'react'

import ProductImageArea from './ProductImageArea/ProductImageArea'
import ProductDetailArea from './ProductDetailArea/ProductDetailArea'

const ProductSection = () => {
    return (
        <section className='flex flex-col md:flex-row items-center justify-between md:gap-30'>
            <ProductImageArea />
            <ProductDetailArea />
        </section>
    )
}

export default ProductSection