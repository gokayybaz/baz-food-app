import React from 'react'
import ProductImageListItemImage from '../ProductImageListItemImage/ProductImageListItemImage'

const ProductImageListItem = ({ scrollTo, image, selectedIndex, index }) => {
    return (
        <span onClick={() => {
            scrollTo(index)

        }} key={index} className={`p-1 rounded-3xl border border-gray-200 transition-all ${selectedIndex == index ? "border-orange-500" : "border-gray-200"}`}>
            <ProductImageListItemImage image={image} imageAltText={"Product Image"} />
        </span>
    )
}

export default ProductImageListItem