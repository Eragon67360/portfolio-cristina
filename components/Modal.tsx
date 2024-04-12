import React, { useEffect } from "react";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
    useEffect(() => {
        // When the modal is open, disable body scroll
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        // Cleanup function to re-enable body scroll when the modal is closed
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]); // Effect dependencies list, runs only when isOpen changes


    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center p-4 z-50 overflow-y-auto">
            <div className="relative">
                {/* Modal Box */}
                <div className="bg-transparent rounded-lg w-[1440px] max-w-[1440px] overflow-y-auto max-h-[90vh]" style={{ maxHeight: '90vh' }}>
                    {children}
                </div>
                {/* Close Button */}
                <button onClick={onClose} className="text-xl font-bold absolute top-0 right-[-80px] bg-[#343434] hover:bg-[#696969] transition-all duration-300 text-white rounded-full w-10 h-10 shadow-lg">
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Modal;
