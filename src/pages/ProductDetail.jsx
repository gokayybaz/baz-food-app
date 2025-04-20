import React from 'react'

import BurgerImage from '../assets/images/header-images/burger.png'
import ProductCard from '../components/ProductCard/ProductCard'

import Sandwich from "../assets/images/most-popular-product-images/sandwich.png"


const ProductDetail = () => {
    return (
        <section className='2xl:px-68 px-36 my-10 mt-20 flex flex-col'>
            <div className='flex  gap-18'>
                <div className='border w-5/12 border-gray-200  rounded-4xl flex-col flex items-center justify-center'>
                    <img width={370} src={BurgerImage} alt="Burger Image" />
                    <div className='flex gap-4 items-center p-4'>
                        <span className='p-1 rounded-3xl border border-gray-200'>
                            <img width={150} src={BurgerImage} alt="Burger Image-2" />
                        </span>
                        <span className='p-1 rounded-3xl border border-gray-200'>
                            <img width={150} src={BurgerImage} alt="Burger Image-2" />
                        </span>
                        <span className='p-1 rounded-3xl border border-gray-200'>
                            <img width={150} src={BurgerImage} alt="Burger Image-2" />
                        </span>
                        <span className='p-1 rounded-3xl border border-gray-200'>
                            <img width={150} src={BurgerImage} alt="Burger Image-2" />
                        </span>
                    </div>
                </div>
                <div className='flex flex-col py-4 w-7/12'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-3xl font-extrabold'>Baz Double Burger Menu</h2>
                        <p className='text-base font-medium text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore</p>
                    </div>
                    <div className='my-6 flex flex-row  justify-between p-4 shadow-lg shadow-gray-100 border border-gray-200 rounded-xl'>
                        <div className='flex w-1/2'>
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
                        <div className='flex w-1/2 items-start gap-6 h-full'>
                            <div className='flex flex-col  w-full gap-6'>
                                <div className='p-4 border flex h-full border-gray-300 rounded-xl items-center justify-center'>
                                    İçecek seçiniz
                                </div>
                                <div className='p-4 border flex h-full border-gray-300 rounded-xl items-center justify-center'>
                                    Ekstra Malzeme seçiniz
                                </div>
                                <div className='p-4 border flex h-full border-gray-300 rounded-xl items-center justify-center'>
                                    Tatlı seçiniz
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button className='p-4 px-8 cursor-pointer text-white font-medium rounded-lg shadow-lg transition-all hover:scale-105 bg-gradient-to-b from-amber-500 to-orange-600'>Sepete Ekle</button>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <div>
                    <h2 className='text-2xl font-semibold'>Benzer Menüler</h2>
                </div>
                <div className='flex mt-10 items-center gap-12'>
                    <ProductCard image={Sandwich} title={"Organik Sandiviç"} price={250} starCount={4.8} unit={" Adet"} />
                    <ProductCard image={Sandwich} title={"Organik Sandiviç"} price={250} starCount={4.8} unit={" Adet"} />
                    <ProductCard image={Sandwich} title={"Organik Sandiviç"} price={250} starCount={4.8} unit={" Adet"} />
                    <ProductCard image={Sandwich} title={"Organik Sandiviç"} price={250} starCount={4.8} unit={" Adet"} />

                </div>
            </div>
        </section>
    )
}

export default ProductDetail