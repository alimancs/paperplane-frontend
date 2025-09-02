import React from "react";

interface TextInputProps {
    value: string;
    placeholder: string;
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder, className }) => {
    const input = document.getElementById('inputBox');

    input?.addEventListener( "input", function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + "px";
    });

    return (
        <textarea
            id="inputBox"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${className} border-0 border-transparent outline-0 text-[20px] rounded-md py-2`}
        />
    );
};

export default TextInput;
