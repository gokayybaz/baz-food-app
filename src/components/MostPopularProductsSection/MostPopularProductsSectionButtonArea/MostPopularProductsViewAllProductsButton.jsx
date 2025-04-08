import React from 'react'
import { CgChevronRight } from 'react-icons/cg'

const MostPopularProductsViewAllProductsButton = () => {
    return (
        <button className='flex items-center p-4 px-6 font-semibold text-white cursor-pointer hover:scale-105 transition-all shadow-lg   shadow-amber-100  bg-amber-500 rounded-full' >Tüm Ürünleri Gör <CgChevronRight size={24} /> </button>

    )
}

export default MostPopularProductsViewAllProductsButton