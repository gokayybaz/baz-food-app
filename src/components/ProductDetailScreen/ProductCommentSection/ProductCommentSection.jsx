import React from 'react'
import ProductCommentSectionTitleArea from './ProductCommentSectionTitleArea/ProductCommentSectionTitleArea'
import ProductCommentList from './ProductCommentList/ProductCommentList'

const ProductCommentSection = () => {
    //TODO: Product Comment Section Component component ayrılacak (Completed: 11.05.2025 11:42).

    return (
        <div className='mt-20'>
            <ProductCommentSectionTitleArea />
            <ProductCommentList />
        </div>
    )
}

export default ProductCommentSection