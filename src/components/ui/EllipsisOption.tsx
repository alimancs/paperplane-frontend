import { Ellipsis } from "lucide-react";
import React from "react";

interface EllipsisOptionProps {
    list: { label: string; onClick: () => void }[];
    className?: string;
}

const EllipsisOption:React.FC<EllipsisOptionProps> = ( { list, className='' } ) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleOptionClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`w-fit ${className}`}>
            <button className="cursor-pointer" onClick={handleOptionClick}>
                <Ellipsis className="w-5 text-gray-500 hover:text-gray-900"/>
            </button>
            {isOpen && (
                <div className="absolute w-fit bg-white border border-gray-200 flex flex-col justify-center items-center rounded rounded-tl-0 shadow-lg z-10">
                    
                    <ul className="py-1 w-full">
                        {list.map((item, index) => (
                            <li className="w-full" key={index}>
                                <button
                                    onClick={item.onClick}
                                    className="block px-6 cursor-pointer w-full py-2 text-sm text-gray-400 hover:text-gray-700"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EllipsisOption;