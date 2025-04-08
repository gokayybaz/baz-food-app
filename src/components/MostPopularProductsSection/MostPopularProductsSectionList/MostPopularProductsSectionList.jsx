import React from 'react'

import ChickenPotPie from "../../../assets/images/most-popular-product-images/chicken-pot-pie.png"
import Enchilade from "../../../assets/images/most-popular-product-images/enchilade.png"
import GreenBeans from "../../../assets/images/most-popular-product-images/green-beans.png"
import GreenSalads from "../../../assets/images/most-popular-product-images/green-salad.png"
import Pizza from "../../../assets/images/most-popular-product-images/pizza.png"
import Sandwich from "../../../assets/images/most-popular-product-images/sandwich.png"

import ProductCard from '../../../components/ProductCard/ProductCard';

const MostPopularProductsSectionList = () => {
    return (
        <div className='grid mt-10 grid-cols-3 gap-15'>
            <ProductCard image={ChickenPotPie} title={"Tavuklu Börek"} price={150} starCount={4.5} unit={" Porsiyon"} />
            <ProductCard image={Enchilade} title={"Ev Yapımı Pizza"} price={200} starCount={5} unit={" Porsiyon"} />
            <ProductCard image={GreenBeans} title={"Yeşil Çubuk"} price={100} starCount={4} unit={" Tabak"} />
            <ProductCard image={GreenSalads} title={"Yeşil Salata"} price={240} starCount={4.5} unit={" Tabak"} />
            <ProductCard image={Pizza} title={"Organik Pizza"} price={300} starCount={4.9} unit={" Adet"} />
            <ProductCard image={Sandwich} title={"Organik Sandiviç"} price={250} starCount={4.8} unit={" Adet"} />
        </div>
    )
}

export default MostPopularProductsSectionList