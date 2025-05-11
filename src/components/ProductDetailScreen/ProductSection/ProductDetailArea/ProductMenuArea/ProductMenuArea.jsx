import React from 'react'

import ProductMenuDetail from './ProductMenuDetail/ProductMenuDetail'
import ProductMenuExtraButtons from './ProductMenuExtraButtons/ProductMenuExtraButtons'

const ProductMenuArea = () => {
    return (
        <div className='my-6 flex flex-col md:flex-row  justify-between p-4 shadow-lg shadow-gray-100 border border-gray-200 rounded-xl'>
            <ProductMenuDetail />
            <ProductMenuExtraButtons />
        </div>
    )
}

export default ProductMenuArea