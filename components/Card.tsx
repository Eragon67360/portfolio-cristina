'use client'
import React, { useState } from 'react'
import Modal from "@/components/Modal";
import Image from 'next/image';

const Card = ({ bg_color, logo, name, name_color, padding_top, content }: { bg_color: string, logo: string, name: string, name_color: string, padding_top: number, content: string[] }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div
                style={{
                    paddingTop: `${padding_top}px`,
                    paddingBottom: '92px',
                    backgroundColor: bg_color,
                    height: '480px'
                }}
                className="flex flex-col justify-between items-center gap-8 group cursor-pointer"
                onClick={() => setModalOpen(true)}>
                <div className="flex items-center justify-center group-hover:scale-110 transition-all duration-200 px-8">
                    <img src={`/images/${logo}`} alt='Logo'/>
                </div>
                <h2 className={`uppercase text-xs tracking-[6px] text-center text-${name_color}`}>{name}</h2>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <div className='flex flex-col'>
                    {content.map((link, index) => {
                        return (
                            <img src={`/images/projets/${link}`} alt={'Project content'} key={index} className="mb-4 max-w-full h-auto" />
                        )
                    })}
                </div>

            </Modal>
        </>

    )
}

export default Card