import React from 'react';
import colors from '../../utils/colors';

interface ComponentProps {
    setVal: (val: string) => void;
    val: string;
    type: string;
    placeholder?: string;
}

const Input: React.FC<ComponentProps> = ({ setVal, val, type, placeholder }) => {
    return (
        <input value={val} onChange={(e) => setVal(e.target.value)} className="w-[100%] mt-[10px] outline-none mx-auto px-[10px] border-[0.5px] h-[40px] border-[#17124f] bg-transparent" placeholder={placeholder} type={type} />
    )
}

export default Input;


interface InputWithIconProps {
    setVal: (val: string) => void;
    val: string;
    type: string;
    placeholder?: string;
    icon: React.ReactNode;
    className: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ setVal, val, type, placeholder, icon, className }) => {
    return (
        <div className={`w-fit h-[35px] flex-row flex justify-center border-none items-center border-[0.5px] px-2 bg-[#eeeeee] ${className}`}>
            <span className="w-[20px] h-[20px] flex justify-center items-center">
                {icon}
            </span>
            <input value={val} onChange={(e) => setVal(e.target.value)} className="flex-grow h-[35px] text-[14px] outline-none mx-auto px-[10px] border-[0.5px] border-none bg-transparent" placeholder={placeholder} type={type} />
        </div>
    )
}

export { Input, InputWithIcon };
// This component can be used to create an input field with an icon on the left side.
