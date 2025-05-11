import React, { useCallback } from 'react'
import { useState } from 'react'

import BurgerImage from '../../../../assets/images/header-images/burger.png'
import ProductImageCarousel from './ProductImageCarousel/ProductImageCarousel'
import ProductImageList from './ProductImageList/ProductImageList'

const ProductImageArea = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [api, setApi] = React.useState()

    const scrollTo = useCallback((index) => {
        api?.scrollTo(index);
    }, [api]);

    const [images, setImages] = useState([
        {
            id: 1,
            image: BurgerImage
        },
        {
            id: 2,
            image: BurgerImage
        },
        {
            id: 3,
            image: BurgerImage
        },
        {
            id: 4,
            image: BurgerImage
        },
    ])

    return (
        <div className='border m-4 md:m-0 md:w-5/12 border-gray-200  rounded-4xl flex-col flex items-center justify-center'>
            <ProductImageCarousel setSelectedIndex={setSelectedIndex} images={images} api={api} setApi={setApi} />
            <ProductImageList images={images} selectedIndex={selectedIndex} scrollTo={scrollTo} />
        </div>
    )
}

export default ProductImageArea