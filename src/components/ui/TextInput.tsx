import React from "react";

interface TextInputProps {
    value: string;
    placeholder: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder, className }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${className} border-0 border-transparent outline-0 text-[20px] px-3 rounded-md p-2`}
        />
    );
};

export default TextInput;
