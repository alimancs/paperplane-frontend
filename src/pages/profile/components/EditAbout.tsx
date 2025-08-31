import { Image, ImageIcon, PictureInPicture } from "lucide-react";
import TextInput from "../../../components/ui/TextInput";
import React from "react";

interface EditAboutProps {
    toAbout: () => void;
}

const EditAbout: React.FC<EditAboutProps> = ({ toAbout }) => {

    const [ about, setAbout ] = React.useState<string>("");

    return (
        <div>
            <TextInput value={about} onChange={(e) => setAbout(e.target.value)} placeholder="About me." className="w-full  min-h-[60px]" />
            <div className="flex flex-row justify-between items-center">
                <button className="flex h-fit items-center gap-2 cursor-pointer hover:opacity-80 w-fit">
                    <div className="flex items-center justify-center h-[35px] w-[35px] rounded-full border border-blue-700">
                        <ImageIcon className="text-blue-700" strokeWidth={1} size={20} />
                    </div>
                    <span className="text-blue-700 text-[14px]">Insert photo</span>
                </button>

                <div className="flex flex-row items-center gap-4">
                    <button onClick={toAbout} className="border w-[100px] border-black text-[14px] rounded-full py-2 bg-transparent hover:bg-gray-100 cursor-pointer">
                        Cancel
                    </button>
                    <button className="w-[100px] text-white text-[14px] rounded-full py-2 bg-black hover:bg-gray-800 cursor-pointer">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditAbout;