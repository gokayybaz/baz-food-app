import React from 'react'

import MostPopularProductsSectionTitleText from "./MostPopularProductsSectionTitleText"
import MostPopularProductsSectionSubTitleText from './MostPopularProductsSectionSubTitleText'

const MostPopularProductSectionTextArea = () => {
    return (
        <div className='flex gap-2 flex-col text-center'>
            <MostPopularProductsSectionTitleText title={"ÜRÜNLER"} />
            <MostPopularProductsSectionSubTitleText subTitle={"EN ÇOK TERCİH EDİLENLER"} />
        </div>
    )
}

export default MostPopularProductSectionTextArea