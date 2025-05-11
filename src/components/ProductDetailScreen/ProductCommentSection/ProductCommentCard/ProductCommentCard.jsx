import React from 'react'
import ProductCommentCardHeader from './ProductCommentCardHeader/ProductCommentCardHeader'
import ProductCommentCardBody from './ProductCommentCardBody/ProductCommentCardBody'
import ProductCommentCardFooter from './ProductCommentCardFooter/ProductCommentCardFooter'

const ProductCommentCard = () => {
    return (
        <div className='p-8 shadow-lg shadow-gray-200 flex flex-col gap-8 border border-gray-300 rounded-xl'>
            <ProductCommentCardHeader />
            <ProductCommentCardBody />
            <ProductCommentCardFooter />
        </div>
    )
}

export default ProductCommentCard