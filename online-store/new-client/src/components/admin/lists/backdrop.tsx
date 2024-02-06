import React from 'react'

const Backdrop = ({ isOpen, backdropRef }: { isOpen: boolean, backdropRef: React.RefObject<HTMLDivElement>
}) => {
    return isOpen ? <div ref={backdropRef} className={'transition-all duration-300 fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black z-[999]  bg-opacity-20'} /> : null;
}

export default Backdrop