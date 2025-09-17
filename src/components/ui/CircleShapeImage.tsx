import React from "react";

interface component {
    src: string;
    alt: string;
    size: number;
}

const CircleShapeImage: React.FC<component> = ({ src, alt, size }) => {
    return (
        <div style={{ height: size, width: size }} className={`relative rounded-full overflow-hidden`}>
            <img src={src} alt={alt} className="w-[100%] h-[100%]" />
        </div>
    )
}

export default CircleShapeImage;