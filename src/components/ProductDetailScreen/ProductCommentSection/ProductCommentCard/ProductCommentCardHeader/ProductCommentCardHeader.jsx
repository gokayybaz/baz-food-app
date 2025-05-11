import React from 'react'
import ProductCommentCardAuthorAvatar from './ProductCommentCardAuthor/ProductCommentCardAuthorAvatar'
import ProductCommentCardAuthorInfoText from './ProductCommentCardAuthor/ProductCommentCardAuthorInfoText/ProductCommentCardAuthorInfoText'

const ProductCommentCardHeader = () => {
    return (
        <span className='flex gap-4 items-center'>
            <ProductCommentCardAuthorAvatar />
            <ProductCommentCardAuthorInfoText />
        </span>
    )
}

export default ProductCommentCardHeader