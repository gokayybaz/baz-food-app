import React from 'react'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Logo from '../../assets/images/logo.svg'

import FooterLogo from './FooterLogo'
import FooterDescription from './FooterDescription'
import FooterSocialMediaIcon from './FooterSocialMediaIcon'
import FooterLinkTitle from './FooterLinkTitle'
import FooterLink from './FooterLink'
import FooterEmailInput from './FooterEmailInput'
import FooterSendEmailButton from './FooterSendEmailButton'

const Footer = () => {
    return (
        <footer className='mt-25 px-36 py-16 flex items-center justify-between bg-gray-100'>
            {/* Footer Left Area */}
            <div className='w-3/12 flex flex-col gap-8'>
                <FooterLogo logo={Logo} />
                <FooterDescription description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium exercitationem esse nemo eius facere! Dolorem esse porro ipsum illo ratione!"} />
                <div className='flex items-center gap-4'>
                    <FooterSocialMediaIcon Icon={FaFacebook} />
                    <FooterSocialMediaIcon Icon={FaInstagram} />
                    <FooterSocialMediaIcon Icon={FaTwitter} />
                    <FooterSocialMediaIcon Icon={FaLinkedin} />
                </div>
            </div>
            {/* Footer Center Area */}
            <div className='flex w-6/12 justify-center items-center gap-24'>
                <div>
                    <FooterLinkTitle title={"Açık Restoranlar"} />
                    <ul className='flex flex-col gap-3'>
                        <FooterLink link={"Baz Restaurant - Adana Şb."} />
                        <FooterLink link={"Baz Restaurant - Ankara Şb."} />
                        <FooterLink link={"Baz Restaurant - İstanbul Şb."} />
                        <FooterLink link={"Baz Restaurant - İzmir Şb."} />
                    </ul>
                </div>
                <div>
                    <FooterLinkTitle title={"Sayfalar"} />
                    <ul className='flex flex-col gap-3'>
                        <FooterLink link={"Anasayfa"} />
                        <FooterLink link={"Günlük Menümüz"} />
                        <FooterLink link={"Hizmetlerimiz"} />
                        <FooterLink link={"Mağazalarımız"} />
                    </ul>
                </div>
            </div>
            {/* Footer Right Area */}
            <div className='flex flex-col w-3/12'>
                <div>
                    <FooterLinkTitle title={"İletişim"} />
                    <FooterDescription description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iusto incidunt ratione unde, ullam nostrum quas!"} />
                </div>
                <div className='flex mt-6 gap-4'>
                    <FooterEmailInput placeholder={"E-Posta Adresinizi Giriniz..."} />
                    <FooterSendEmailButton title={"Gönder"} />
                </div>
            </div>
        </footer >
    )
}

export default Footer