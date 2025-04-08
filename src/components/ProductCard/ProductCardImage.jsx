import React from 'react'

const ProductCardImage = ({ image }) => {
    return (
        <img className='rounded-tl-3xl rounded-tr-3xl' src={image} alt="Product" />

    )
}

export default ProductCardImage