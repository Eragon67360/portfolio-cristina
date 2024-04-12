'use client'
import React from 'react'
import Link from 'next/link'
import MainLogo from './Logos/MainLogo'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    return (
        <>
            <div className='w-full bg-white py-8 flex flex-col items-center justify-center gap-16'>
                <div className='flex items-center justify-center gap-8 w-full'>
                    <h2 className='uppercase w-full text-end text-2xl font-bold tracking-[12px]'>Cristina</h2>
                    <Link href={'/'}>
                        <MainLogo />
                    </Link>

                    <h2 className='uppercase w-full text-start text-2xl font-bold tracking-[12px]'>Andrés</h2>
                </div>

                <div className='flex gap-16'>
                    <Link href={'/'} className={` uppercase text-xs tracking-[6px] hover:font-bold transition-all duration-300 ${isActive('/') ? 'font-bold' : 'font-normal'}`}>Work</Link>
                    <Link href={'/services'} className={` uppercase text-xs tracking-[6px] hover:font-bold transition-all duration-300 ${isActive('/services') ? 'font-bold' : 'font-normal'}`}>Services</Link>
                    <Link href={'/about'} className={` uppercase text-xs tracking-[6px] hover:font-bold transition-all duration-300 ${isActive('/about') ? 'font-bold' : 'font-normal'}`}>About me</Link>
                    <Link href={'/contact'} className={` uppercase text-xs tracking-[6px] hover:font-bold transition-all duration-300 ${isActive('/contact') ? 'font-bold' : 'font-normal'}`}>Contact</Link>
                </div>

            </div>
        </>
    )
}

export default Header