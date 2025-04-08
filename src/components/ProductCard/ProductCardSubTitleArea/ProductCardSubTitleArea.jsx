import React from 'react'

import ProductCardPriceText from './ProductCardPriceText'
import ProductCardUnitText from './ProductCardUnitText'
import ProductCardAddBasketButton from './ProductCardAddBasketButton'

const ProductCardSubTitleArea = ({ price, unit }) => {
    return (
        <span className='flex items-center justify-between mt-4'>
            <span className='flex gap-1 items-center'>
                <ProductCardPriceText price={price} />
                <ProductCardUnitText unit={unit} />
            </span>
            <span>
                <ProductCardAddBasketButton title={"Sepete Ekle"} />
            </span>
        </span>
    )
}

export default ProductCardSubTitleArea