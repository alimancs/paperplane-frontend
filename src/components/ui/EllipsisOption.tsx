import { Ellipsis } from "lucide-react";
import React from "react";

interface EllipsisOptionProps {
    list: { label: string; onClick: () => void }[];
}

const EllipsisOption:React.FC<EllipsisOptionProps> = ( { list } ) => {
    return (
        <button className="cursor-pointer">
            <Ellipsis className="h-5 w-5 text-gray-500 hover:text-gray-900"/>
        </button>
    );
};

export default EllipsisOption;