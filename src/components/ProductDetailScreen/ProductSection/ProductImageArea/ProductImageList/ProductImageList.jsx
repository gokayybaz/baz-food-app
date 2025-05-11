import React from 'react'
import ProductImageListItem from './ProductImageListItem/ProductImageListItem'

const ProductImageList = ({ images, selectedIndex, scrollTo }) => {
    return (
        <div className='flex gap-4 items-center p-4'>
            {
                images.map((image, index) => (
                    <ProductImageListItem image={image} index={index} selectedIndex={selectedIndex} scrollTo={scrollTo} />
                ))
            }
        </div>
    )
}

export default ProductImageList