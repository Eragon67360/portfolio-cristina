'use client'
import React, { useState } from 'react'
import Modal from "@/components/Modal";
import Image from 'next/image';

const Card = ({ bg_color, logo, name, name_color, complete_name, content }: { bg_color: string, logo: string, name: string, name_color: string, complete_name: string, content: string[] }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div
                style={{
                    paddingBottom: '92px',
                    backgroundColor: bg_color,
                }}
                className="relative aspect-square flex flex-col justify-end items-center gap-12 group cursor-pointer size-full sm:size-full md:size-1/2 lg:size-1/2 xl:size-1/3 2xl:size-1/3 transition-all duration-250"
                onClick={() => setModalOpen(true)}>
                <div className="flex items-center justify-center group-hover:scale-110 transition-all duration-200 px-8">
                    <img src={`/images/${logo}`} alt='Logo' />
                </div>
                <h2 className={`uppercase text-xs tracking-[6px] text-center text-${name_color}`}>{name}</h2>

                <div className="absolute left-0 w-full bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 w-full  p-4 text-white text-center">
                        <p>{complete_name}</p>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <div className='flex flex-col gap-4'>
                    {content.map((link, index) => {
                        return (
                            <img src={`/images/projets/${link}`} alt={'Project content'} key={index} className="max-w-full h-auto" />
                        )
                    })}
                </div>

            </Modal>
        </>

    )
}

export default Card