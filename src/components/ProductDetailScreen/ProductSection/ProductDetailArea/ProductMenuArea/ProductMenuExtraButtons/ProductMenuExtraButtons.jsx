import React from 'react'
import ProductMenuExtraDialogButton from './ProductMenuExtraDialogButton/ProductMenuExtraDialogButton'

const ProductMenuExtraButtons = () => {
    return (
        <div className='flex md:w-1/2 items-start gap-6 h-full'>
            <div className='flex flex-col  w-full gap-6'>
                <ProductMenuExtraDialogButton buttonTitle={"İçecek Seçiniz"} dialogTitle={"İçecek Seçimi"} dialogContentText={"This action cannot be undone. This will permanently delete your account and remove your data from our servers."} />
                <ProductMenuExtraDialogButton buttonTitle={"Özel Sos Seçiniz"} dialogTitle={"Özel Sos Seçimi"} dialogContentText={"This action cannot be undone. This will permanently delete your account and remove your data from our servers."} />
                <ProductMenuExtraDialogButton buttonTitle={"Tatlı Seçiniz"} dialogTitle={"Tatlı Seçimi"} dialogContentText={"This action cannot be undone. This will permanently delete your account and remove your data from our servers."} />

            </div>
        </div>
    )
}

export default ProductMenuExtraButtons