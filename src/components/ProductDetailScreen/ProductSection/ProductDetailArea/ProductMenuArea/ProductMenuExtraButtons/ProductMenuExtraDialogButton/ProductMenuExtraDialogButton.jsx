import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { BiPlus } from 'react-icons/bi'


const ProductMenuExtraDialogButton = ({ buttonTitle, dialogTitle, dialogContentText }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className='p-4 border cursor-pointer hover:bg-gray-100 transition-all flex h-full border-gray-300 rounded-xl items-center justify-center'>
                    <BiPlus size={28} className='mx-2' /> {buttonTitle}
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogDescription>
                        {dialogContentText}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ProductMenuExtraDialogButton