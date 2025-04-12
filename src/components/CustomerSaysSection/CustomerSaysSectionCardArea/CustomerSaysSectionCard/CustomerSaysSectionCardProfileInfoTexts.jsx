import React from 'react'

const CustomerSaysSectionCardProfileInfoTexts = ({ fullName, role }) => {
    return (
        <span className='text-start flex flex-col gap-0.5'>
            <h3 className='font-semibold text-xl'>{fullName}</h3>
            <h4 className='font-medium text-slate-500'>{role}</h4>
        </span>
    )
}

export default CustomerSaysSectionCardProfileInfoTexts