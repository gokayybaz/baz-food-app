import React from 'react'


import MostPopularProductsSectionTextArea from './MostPopularProductsSectionTitleArea/MostPopularProductsSectionTitleArea'
import MostPopularProductsSectionList from './MostPopularProductsSectionList/MostPopularProductsSectionList';
import MostPopularProductsButtonArea from './MostPopularProductsSectionButtonArea/MostPopularProductsButtonArea';

const MostPopularProductsSection = () => {
    return (
        <div className='flex flex-col mt-20 md:mt-25 md:px-36 justify-center items-center'>
            <MostPopularProductsSectionTextArea />
            <MostPopularProductsSectionList />
            <MostPopularProductsButtonArea />
        </div>
    )
}

export default MostPopularProductsSection