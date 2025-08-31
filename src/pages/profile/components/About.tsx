import React from "react";

interface AboutProps {
    toEdit: () => void;
}

const About: React.FC<AboutProps> = ({ toEdit }) => {
    return (
        <div className="w-full h-fit py-9 flex flex-col gap-4 justify-center items-center bg-gray-100 text-center rounded-[2px]">
            <span>Tell the world about yourself</span>
            <span className="text-[13px] w-[70%]">
                Here&apos;s where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.
            </span>
            <button onClick={toEdit} className="border-black hover:bg-gray-300 transition-all duration-150 ease-in-out cursor-pointer border rounded-full px-5 py-1 text-[14px] w-fit">
                Get started
            </button>
        </div>
    );
};

export default About;
