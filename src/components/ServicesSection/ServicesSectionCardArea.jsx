import React from 'react'


import { SiFresh } from 'react-icons/si';
import { MdCleanHands } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

import ServicesSectionCard from './ServicesSectionCard/ServicesSectionCard'


const ServicesSectionCardArea = () => {
    return (
        <div className='grid grid-cols-3 mt-10 gap-8'>
            <ServicesSectionCard Icon={SiFresh} title={"TAZE ve DOĞAL MALZEME"} description={"Özenle seçilmiş doğal ve taze malzemelerle gerçek lezzeti sofralarınıza taşıyoruz."} />
            <ServicesSectionCard Icon={MdCleanHands} title={"TEMİZ ve GÜVENİLİR"} description={"En hijyenik koşullarda, güvenilir lezzetleri sofralarınıza sunuyoruz."} />
            <ServicesSectionCard Icon={TbTruckDelivery} title={"HIZLI TESLİMAT"} description={"Siparişiniz en kısa sürede, güvenli ve hızlı bir şekilde kapınızda."} />
        </div>
    )
}

export default ServicesSectionCardArea