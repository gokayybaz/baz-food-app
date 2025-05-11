import React from 'react'


import ProductCard from '../../../../components/ProductCard/ProductCard'
import Sandwich from "../../../../assets/images/most-popular-product-images/sandwich.png"

const SimilarProductList = () => {
    return (
        <div className='m-6 md:m-0 mt-10 grid md:grid-cols-3 items-center gap-10'>
            <ProductCard image={Sandwich} title={"Organik Sandiviç"} price={250} starCount={4.8} unit={" Adet"} />
            <ProductCard image={Sandwich} title={"Organik Sandiviç"} price={250} starCount={4.8} unit={" Adet"} />
            <ProductCard image={Sandwich} title={"Organik Sandiviç"} price={250} starCount={4.8} unit={" Adet"} />
        </div>
    )
}

export default SimilarProductList