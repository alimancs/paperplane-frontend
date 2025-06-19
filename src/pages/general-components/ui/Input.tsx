import React from 'react';
import colors from '../../../utils/colors';

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
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ setVal, val, type, placeholder, icon }) => {
    return (
        <div style={{ border: `0.5px solid ${colors.line}` }} className={`w-fit h-[40px] flex-row flex justify-center items-center border-[0.5px] px-2 bg-[#f8f9fa]`}>
            <span className="w-[30px] h-[30px] flex justify-center items-center">
                {icon}
            </span>
            <input value={val} onChange={(e) => setVal(e.target.value)} className="flex-grow h-[40px] outline-none mx-auto px-[10px] border-[0.5px] border-none bg-transparent" placeholder={placeholder} type={type} />
        </div>
    )
}

export { Input, InputWithIcon };
// This component can be used to create an input field with an icon on the left side.
