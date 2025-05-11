import React from 'react'


import CustomerSaysSectionCardProfileImage from './CustomerSaysSectionCardProfileImage'
import CustomerSaysSectionCardProfileInfoTexts from './CustomerSaysSectionCardProfileInfoTexts'
import CustomerSaysSectionCardText from './CustomerSaysSectionCardText'

const CustomerSaysSectionCard = ({ profileInfo, text }) => {
    return (
        <div className='flex flex-col gap-8 p-8 text-center rounded-xl border border-gray-300 shadow-xl'>
            <div className='flex gap-5 items-center justify-center'>
                <CustomerSaysSectionCardProfileImage />
                <CustomerSaysSectionCardProfileInfoTexts fullName={profileInfo.fullName} role={profileInfo.role} />
            </div>
            <CustomerSaysSectionCardText text={text} />
        </div>
    )
}

export default CustomerSaysSectionCard