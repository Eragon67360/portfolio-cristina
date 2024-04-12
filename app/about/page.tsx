import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import profilePic from '@/public/images/cristina.jpeg'
import Figma from '@/components/Logos/Figma'
import Photoshop from '@/components/Logos/Photoshop'
import Lightroom from '@/components/Logos/Lightroom'
import Illustrator from '@/components/Logos/Illustrator'
import InDesign from '@/components/Logos/InDesign'

function page() {
    return (
        <>
            <div className='w-full bg-[#E2E2DB] flex flex-col items-center pt-[124px] pb-[197px]'>
                <div className='w-[1440px] flex flex-col items-center px-[152px] gap-10'>
                    <div className='flex'>
                        <Image src={profilePic} alt='Profile pic' width={246} height={328} className='rounded-[16px] grayscale' />

                        <div className='flex flex-col justify-between pl-[42px] pr-[16px] border-r border-black w-full'>
                            <div className='flex flex-col gap-5'>
                                <h2 className='uppercase font-bold tracking-[4px]'>Hello, I&apos;m Cristina Andrés</h2>
                                <p className='text-xs font-medium'>I am a passionate product and graphic designer.  With a solid foundation in industrial design engineering, I understand the intricate balance between form and function. My expertise extends beyond mere conceptualization; I bring ideas to life through meticulous attention to detail and a keen eye for user experience.</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='uppercase text-xs font-bold tracking-[6px]'>Softwares</h2>
                                <div className='flex justify-between'>
                                    <Figma />
                                    <Photoshop />
                                    <Lightroom />
                                    <Illustrator />
                                    <InDesign />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col text-xs w-full pl-4'>
                            <h2 className='uppercase font-bold tracking-[6px]'>Experience</h2>
                            <div className='flex gap-5 mt-3'>
                                <h3 className='font-bold'>Graphic Designer</h3>
                                <p>Future Fibres Rigging Systems S.L.</p>
                                <p>1 year </p>
                            </div>
                            <div className='flex gap-5 mt-2'>
                                <h3 className='font-bold'>UX/UI Designer</h3>
                                <p>Freelancer</p>
                                <p>since 2023</p>
                            </div>

                            <h2 className='uppercase text-xs font-bold tracking-[6px] mt-10'>Studies</h2>

                            <div className='flex gap-2 mt-2'>
                                <h3 className='font-bold'>Industrial Design Engineering and Product Development </h3>
                                <p>UPV</p>
                                <p>2023</p>
                            </div>


                            <div className='ml-2 border-l border-black flex flex-col gap-1 px-2 mt-2'>
                                <div className='flex gap-5'>
                                    <h3 className='font-bold'>He-ARC Neuchâtel</h3>
                                    <p>6 months | Erasmus</p>
                                </div>
                                <div className='flex gap-5'>
                                    <h3 className='font-bold'>Hochschule of Applied Science Augsburg</h3>
                                    <p>6 months | Erasmus</p>
                                </div>

                            </div>
                            <h2 className='uppercase text-xs font-bold tracking-[6px] mt-10'>Languages</h2>
                            <div className='flex gap-8 mt-4'>
                                <p>Spanish</p>
                                <p>Catalan</p>
                                <p>French</p>
                                <p>English</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex gap-4 justify-end items-end w-full'>
                        <Link href={''} className='uppercase text-white text-xs bg-black rounded-lg p-[10px] hover:bg-black/75'>Share</Link>
                        <Link href={''} className='uppercase text-white text-xs bg-black rounded-lg p-[10px] hover:bg-black/75'>Download CV</Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default page