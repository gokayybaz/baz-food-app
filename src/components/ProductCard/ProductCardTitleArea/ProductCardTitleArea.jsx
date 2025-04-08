import React from 'react'
import ProductCardTitleText from './ProductCardTitleText'
import ProductCardStarIcon from './ProductCardStarIcon'
import ProductCardStarCountText from './ProductCardStarCountText'

const ProductCardTitleArea = ({ title, starCount }) => {
    return (
        <span className='flex items-center justify-between'>
            <ProductCardTitleText title={title} />
            {/* Product Card Star Area */}
            <span className='flex items-center gap-2'>
                <ProductCardStarIcon />
                <ProductCardStarCountText starCount={starCount} />
            </span>
        </span>
    )
}

export default ProductCardTitleArea