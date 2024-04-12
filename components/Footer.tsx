import React from 'react'
import MainLogo from './Logos/MainLogo'
import Link from 'next/link'
import Image from 'next/image'
import main_logo from '@/public/images/main_logo.svg'

const Footer = () => {
    return (
        <>
            <div className='w-full bg-[#E2E2DB] px-16 py-8 flex justify-between items-end'>
                <div className='h-full'>
                    <Image src={main_logo} alt='main logo' width={120} height={120} />
                </div>

                <div className='flex gap-8 h-full  items-end'>
                    <Link href={'https://www.behance.net/cristinaandrs?tracking_source=userSearchProfilePanel'} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M19.1884 13.01C17.5002 13.01 17.2656 14.7552 17.2656 14.7552H20.8547C20.8547 14.7552 20.8776 13.01 19.1884 13.01Z" fill="black" />
                            <path d="M11.045 14.7552H7.86328V17.7806H10.6801C10.728 17.7806 10.7998 17.7817 10.8838 17.7806C11.337 17.7696 12.196 17.6329 12.196 16.3097C12.196 14.7392 11.045 14.7552 11.045 14.7552Z" fill="black" />
                            <path d="M14.038 0.804794C6.8044 0.804794 0.94043 6.87709 0.94043 14.369C0.94043 21.8609 6.8044 27.9343 14.038 27.9343C21.2705 27.9343 27.1344 21.8609 27.1344 14.369C27.1344 6.87764 21.2699 0.804794 14.038 0.804794ZM16.7947 9.13954H21.3034V10.5333H16.7947V9.13954ZM14.5156 16.4508C14.5156 19.9053 11.0451 19.7913 11.0451 19.7913H7.86337H7.77029H5.35822V8.47298H7.77029H7.86337H11.0451C12.7726 8.47298 14.1364 9.46125 14.1364 11.4863C14.1364 13.5113 12.4689 13.6402 12.4689 13.6402C14.6672 13.6402 14.5156 16.4508 14.5156 16.4508ZM22.9501 16.2657H17.2872C17.2872 18.3678 19.21 18.2356 19.21 18.2356C21.0258 18.2356 20.9625 17.0176 20.9625 17.0176H22.8863C22.8863 20.2496 19.1456 20.0281 19.1456 20.0281C14.6587 20.0281 14.9475 15.701 14.9475 15.701C14.9475 15.701 14.9432 11.353 19.1456 11.353C23.5692 11.353 22.9501 16.2657 22.9501 16.2657Z" fill="black" />
                            <path d="M11.8178 11.662C11.8178 10.4848 11.045 10.4848 11.045 10.4848H10.6354H7.86328V13.01H10.8477C11.3625 13.01 11.8178 12.8387 11.8178 11.662Z" fill="black" />
                        </svg>
                    </Link>

                    <Link href={'https://www.linkedin.com/in/cristinaandrs/'} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                            <g clipPath="url(#clip0_1_1207)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 0.148621C21.7268 0.148621 28 6.42182 28 14.1486C28 21.8754 21.7268 28.1486 14 28.1486C6.2732 28.1486 0 21.8754 0 14.1486C0 6.42182 6.2732 0.148621 14 0.148621ZM9.62298 22.0166V11.0834H5.98823V22.0166H9.62298ZM22.7272 22.0166V15.7469C22.7272 12.3886 20.9342 10.8263 18.5431 10.8263C16.6151 10.8263 15.7515 11.8866 15.2679 12.6314V11.0834H11.6341C11.6823 12.1092 11.6341 22.0166 11.6341 22.0166H15.2679V15.9107C15.2679 15.5839 15.2914 15.2572 15.3877 15.0236C15.6499 14.3709 16.2483 13.6948 17.2523 13.6948C18.5666 13.6948 19.0932 14.6977 19.0932 16.1669V22.0166H22.7272ZM7.83016 5.81151C6.58656 5.81151 5.77407 6.62909 5.77407 7.70069C5.77407 8.74971 6.56184 9.58982 7.78203 9.58982H7.80549C9.07288 9.58982 9.86174 8.74971 9.86174 7.70069C9.83823 6.62909 9.07293 5.81151 7.83016 5.81151Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1207">
                                    <rect width="28" height="28" fill="white" transform="translate(0 0.148621)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer