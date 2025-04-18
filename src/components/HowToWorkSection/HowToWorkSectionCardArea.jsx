import React from 'react'

import ComputerImage from '../../assets/images/how-to-work-images/computer.svg'
import FoodImage from '../../assets/images/how-to-work-images/food.svg'
import PackageImage from '../../assets/images/how-to-work-images/package.svg'

import StepLeftImage from '../../assets/images/how-to-work-images/step-line-left.svg'
import StepRightImage from '../../assets/images/how-to-work-images/step-line-right.svg'

import HowToWorkSectionCard from './HowToWorkSectionCard/HowToWorkSectionCard'
import HowToWorkSectionStepArrowImage from './HowToWorkSectionStepArrowImage'

const HowToWorkSectionCardArea = () => {
    return (
        <div className='mt-10 shadow-xl p-12 rounded-3xl  md:grid grid-cols-5 '>
            <HowToWorkSectionCard flexType={'flex-col'} cardImage={ComputerImage} cardTitle={"SİPARİŞ ALINIR"} cardDescription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, maxime!"} />
            <HowToWorkSectionStepArrowImage image={StepLeftImage} />
            <HowToWorkSectionCard flexType={'flex-col-reverse'} cardImage={FoodImage} cardTitle={"SİPARİŞ HAZIRLANIR"} cardDescription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, maxime!"} />
            <HowToWorkSectionStepArrowImage image={StepRightImage} />
            <HowToWorkSectionCard flexType={'flex-col'} cardImage={PackageImage} cardTitle={"SİPARİŞ PAKETLENİR"} cardDescription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, maxime!"} />
        </div>
    )
}

export default HowToWorkSectionCardArea