import React from 'react'

import { BsClock } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io5';
import { PiPhoneCall } from 'react-icons/pi';

import CompanyInfoSectionCard from './CompanyInfoSectionCard/CompanyInfoSectionCard'

const CompanyInfoSection = () => {
    return (
        <section className='flex mt-28 border border-gray-100 rounded-4xl py-12 px-36 shadow-lg mx-32 items-center justify-between'>
            <CompanyInfoSectionCard Icon={BsClock} title={"09:00 - 00:00"} subTitle={"Çalışma Saatlerimiz"} />
            <hr className='w-[1px] h-36 border-none bg-slate-200' />
            <CompanyInfoSectionCard Icon={IoLocation} title={"Tüm Türkiye'de"} subTitle={"Hizmet Noktalarımız Bulunmaktadır"} />
            <hr className='w-[1px] h-36 border-none bg-slate-200' />
            <CompanyInfoSectionCard Icon={PiPhoneCall} title={"444 555 7898"} subTitle={"7/24 Aktif Müşteri Hizmetlerimiz"} />
        </section>
    )
}

export default CompanyInfoSection