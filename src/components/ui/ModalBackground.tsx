import React from "react";

interface Props {
    children:React.ReactNode;
}

const ModalBackground:React.FC<Props> = ( { children }) => {
    return (
        <div className="fixed inset-0 top-0 z-[1000] flex flex-row py-[30px] justify-center left-0 w-full overflow-y-auto h-screen bg-black/30">
            { children }
        </div>
    )
}

export default ModalBackground;