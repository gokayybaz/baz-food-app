import React from 'react'

import ProductSection from '@/components/ProductDetailScreen/ProductSection/ProductSection'
import ProductCommentSection from '@/components/ProductDetailScreen/ProductCommentSection/ProductCommentSection'
import SimilarProductsSection from '@/components/ProductDetailScreen/SimilarProductsSection/SimilarProductsSection'


const ProductDetail = () => {
    return (
        <section className='2xl:px-68 md:px-34 my-5 md:my-10 md:mt-20 flex flex-col'>
            <ProductSection />
            <ProductCommentSection />
            <SimilarProductsSection />
        </section>
    )
}

export default ProductDetail