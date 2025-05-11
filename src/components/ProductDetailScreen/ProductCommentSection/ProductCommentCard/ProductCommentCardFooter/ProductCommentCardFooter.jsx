import React from 'react'
import ProductCommentCardCommentComplaintButton from './ProductCommentCardCommentComplaintButton'
import ProductCommentCardCommentLikeButton from './ProductCommentCardCommentLikeButton'

const ProductCommentCardFooter = () => {
    return (
        <span className='flex items-center justify-center gap-8'>
            <ProductCommentCardCommentComplaintButton />
            <ProductCommentCardCommentLikeButton />
        </span>
    )
}

export default ProductCommentCardFooter