import React from 'react'

import HowToWorkSectionTextArea from './HowToWorkSectionTextArea/HowToWorkSectionTextArea'
import HowToWorkSectionCardArea from './HowToWorkSectionCardArea'

const HowToWorkSection = () => {
    return (
        <section className='mt-25 px-36'>
            <HowToWorkSectionTextArea title={"ÇALIŞMA ŞEKLİMİZ"} subTitle={"SİPARİŞİNİZ NASIL HAZIRLANIYOR?"} />
            <HowToWorkSectionCardArea />
        </section>
    )
}

export default HowToWorkSection