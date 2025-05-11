import React from 'react'

import ProductCommentCardAuthorFullName from './ProductCommentCardAuthorFullName'
import ProductCommentCardAuthorRole from './ProductCommentCardAuthorRole'

const ProductCommentCardAuthorInfoText = () => {
    return (
        <span>
            <ProductCommentCardAuthorFullName fullName={"Gökay Baz"} />
            <ProductCommentCardAuthorRole role={"Software Developer"} />
        </span>
    )
}

export default ProductCommentCardAuthorInfoText