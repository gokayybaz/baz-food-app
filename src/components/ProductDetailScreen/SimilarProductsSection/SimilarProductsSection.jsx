import React from 'react'

import SimilarProductsSectionTitleArea from './SimilarProductsSectionTitleArea/SimilarProductsSectionTitleArea'
import SimilarProductList from './SimilarProductList/SimilarProductList'

const SimilarProductsSection = () => {
    return (
        <div className='mt-20'>
            <SimilarProductsSectionTitleArea />
            <SimilarProductList />
        </div>
    )
}

export default SimilarProductsSection