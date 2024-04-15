'use client'
import React from 'react'
import { Modal, useDisclosure } from "@nextui-org/react";
import ModalContentSocials from '@/components/ModalContentSocials'


const ShareButton = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <button onClick={onOpen} className='uppercase text-white text-xs bg-black rounded-lg p-[10px] hover:bg-black/75'>Share</button>
            <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContentSocials />
            </Modal>
        </>
    )
}

export default ShareButton