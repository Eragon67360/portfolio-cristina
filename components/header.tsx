import React from 'react'
import Link from 'next/link'
import MainLogo from './Logos/MainLogo'

const Header = () => {
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
                    <Link href={'/'} className='uppercase text-xs tracking-[6px] font-normal hover:font-bold transition-all duration-300'>Work</Link>
                    <Link href={'/services'} className='uppercase text-xs tracking-[6px] font-normal hover:font-bold transition-all duration-300'>Services</Link>
                    <Link href={'/about'} className='uppercase text-xs tracking-[6px] font-normal hover:font-bold transition-all duration-300'>About me</Link>
                    <Link href={'/contact'} className='uppercase text-xs tracking-[6px] font-normal hover:font-bold transition-all duration-300'>Contact</Link>
                </div>

            </div>
        </>
    )
}

export default Header