import React from 'react'
import ProductCommentSectionTitleText from './ProductCommentSectionTitleText'
import ProductCommentSectionWriteCommentButton from './ProductCommentSectionWriteCommentButton'

const ProductCommentSectionTitleArea = () => {
    return (
        <div className='m-6 md:m-0 flex items-center justify-between'>
            <ProductCommentSectionTitleText />
            <ProductCommentSectionWriteCommentButton />
        </div>
    )
}

export default ProductCommentSectionTitleArea