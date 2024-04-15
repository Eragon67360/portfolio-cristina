'use client'
import React from 'react'
import Link from 'next/link'
import MainLogo from './Logos/MainLogo'
import Email from './Logos/Email'
import Appointment from './Logos/Appointment'
import { usePathname } from 'next/navigation'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";



const Header = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                    <Link href={'/'} className={`pb-1 uppercase text-xs tracking-[6px] hover:border-b hover:border-black  transition-all duration-300 ${isActive('/') ? 'font-bold' : 'font-normal'}`}>Work</Link>
                    <Link href={'/services'} className={`pb-1 uppercase text-xs tracking-[6px] hover:border-b hover:border-black transition-all duration-300 ${isActive('/services') ? 'font-bold' : 'font-normal'}`}>Services</Link>
                    <Link href={'/about'} className={`pb-1 uppercase text-xs tracking-[6px] hover:border-b hover:border-black transition-all duration-300 ${isActive('/about') ? 'font-bold' : 'font-normal'}`}>About me</Link>
                    <button onClick={onOpen} className='pb-1 uppercase text-xs tracking-[6px] hover:border-b hover:border-black transition-all duration-300 font-normal'>Contact</button>
                    <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">Contact</ModalHeader>
                                    <ModalBody>
                                        <div className='flex flex-col gap-2'>
                                            <a href="mailto:cristina.andresrr@gmail.com" className='flex gap-4 px-4 py-3 items-center rounded-lg hover:bg-black/5 transition-all duration-300'>
                                                <div className='scale-90'>
                                                    <Email />
                                                </div>
                                                <span>cristina.andresrr@gmail.com</span>
                                            </a>
                                            <a href="https://calendly.com/cristina-andresrr/30min" target='_blank' className='flex gap-4 px-4 py-3 items-center rounded-lg hover:bg-black/5 transition-all duration-300'>
                                                <div className='scale-90'>
                                                    <Appointment />
                                                </div>
                                                <span>Book an appointment</span>
                                            </a>

                                        </div>


                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>

            </div>
        </>
    )
}

export default Header