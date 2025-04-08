import React from 'react'

import ProductCardImage from './ProductCardImage'
import ProductCardTitleArea from './ProductCardTitleArea/ProductCardTitleArea'
import ProductCardSubTitleArea from './ProductCardSubTitleArea/ProductCardSubTitleArea'

const ProductCard = ({ image, title, price, starCount, unit }) => {
    return (
        <div className='shadow-xl rounded-3xl'>
            {/* Product Card Image Area */}
            <div>
                <ProductCardImage image={image} />
            </div>
            <div className='p-5 px-5'>
                {/* Product Card Title Area */}
                <ProductCardTitleArea title={title} starCount={starCount} />
                {/* Product Card SubTitle Area */}
                <ProductCardSubTitleArea price={price} unit={unit} />
            </div>
        </div>
    )
}

export default ProductCard