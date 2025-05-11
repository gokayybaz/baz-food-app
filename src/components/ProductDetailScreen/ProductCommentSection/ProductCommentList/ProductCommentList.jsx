import React from 'react'
import ProductCommentCard from '../ProductCommentCard/ProductCommentCard'

const ProductCommentList = () => {
    return (
        <div className='m-6 md:m-0 mt-16 grid md:grid-cols-2 gap-12'>
            <ProductCommentCard />
            <ProductCommentCard />
            <ProductCommentCard />
            <ProductCommentCard />
        </div>
    )
}

export default ProductCommentList