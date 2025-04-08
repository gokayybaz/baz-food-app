import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'

const ProductCard = ({ image, title, price, starCount, unit }) => {
    return (
        <div className='shadow-xl rounded-3xl'>
            <div>
                <img className='rounded-tl-3xl rounded-tr-3xl' src={image} alt="Chicken Pot Pie" />
            </div>
            <div className='p-5 px-5'>
                <span className='flex items-center justify-between'>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                    <span className='flex items-center gap-2'>
                        <BsFillStarFill size={20} className='text-amber-500' />
                        <p className='text-lg'>{starCount}</p>
                    </span>
                </span>
                <span className='flex items-center justify-between mt-4'>
                    <span className='flex gap-1 items-center'>
                        <h3 className='text-xl font-semibold'>{price}₺</h3>
                        <h3 className='text-slate-500'>/{unit} </h3>
                    </span>
                    <span>
                        <button className='p-4 py-2 cursor-pointer bg-transparent hover:bg-amber-500 transition-all hover:text-white rounded-full text-amber-600 border '>Sepete Ekle</button>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default ProductCard