import { X } from "lucide-react";
import ModalBackground from "../../../components/ui/ModalBackground";
import React from "react";

interface Props {
    closeModal:()=>void;
}

const EditEmailAddress:React.FC<Props> = ( { closeModal } ) => {
    return (
        <ModalBackground>
            <div className="w-[550px] bg-white p-3 rounded-[5px] shadow-xl h-[300px]">
                <div className="h-fit w-full flex flex-row justify-end">
                    <button onClick={closeModal} className="w-fit cursor-pointer hover:bg-gray-300 rounded-full p-1 hover:text-gray-900 text-gray-800 h-fit">
                        <X className="hover:rotate-90 ease-in-out transition-all duration-300" strokeWidth={1} size={27}/>
                    </button>
                </div>

            </div>
        </ModalBackground>
    )
}

export default EditEmailAddress;