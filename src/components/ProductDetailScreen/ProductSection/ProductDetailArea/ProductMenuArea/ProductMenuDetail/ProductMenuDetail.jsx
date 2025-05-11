import React from 'react'

const ProductMenuDetail = () => {
    return (
        <div className='flex md:w-1/2'>
            <div className='flex flex-col justify-between'>
                <h2 className='font-semibold text-gray-700'>Menü İçeriği</h2>
                <ul className='py-3 px-3 flex flex-col gap-2'>
                    <li><p className='text-sm font-semibold text-gray-600'>1 Adet Hamburger</p></li>
                    <li><p className='text-sm font-semibold text-gray-600'>1 Orta Boy Patates Kızartması</p></li>
                    <li><p className='text-sm font-semibold text-gray-600'>4 Adet Soğan Halkası</p></li>
                    <li><p className='text-sm font-semibold text-gray-600'>1 Adet Ketçap Mayonez</p></li>
                </ul>
                <h3 className='text-2xl font-semibold m-3'>450 ₺</h3>
            </div>

        </div>
    )
}

export default ProductMenuDetail