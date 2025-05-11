import React from 'react'

const ProductImageListItemImage = ({ image, imageAltText }) => {
    return (
        <img width={150} src={image.image} alt={imageAltText} />
    )
}

export default ProductImageListItemImage