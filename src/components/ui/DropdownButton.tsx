"use client";
import { FC, useEffect, useRef, useState } from "react";

interface components {
    icon:React.ElementType;
    options:{ title:string, isDangerButton:boolean, action:()=>void }[];
}

const DropdownButton:FC<components> = ( { icon:Icon, options }) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const handleOutsideClick = ( event:MouseEvent ) => {
        if ( dropDownRef.current && !dropDownRef.current.contains( event.target as Node )) {
            setOpen(false);
        }
    }

    //add event listener on mount
    window.addEventListener("mousedown", handleOutsideClick);
    
    //remove event listener on unmoun
    return ()=>window.removeEventListener("mousedown", handleOutsideClick);

  }, [])

  return (
    <div ref={dropDownRef} className="relative inline-block">
      <button onClick={() => setOpen(!open)} className="cursor-pointer">
        <Icon/>
      </button>

      {open && (
        <div className="absolute mt-2 z-[500] bg-white border border-gray-200 rounded-lg shadow-lg text-[14px] w-60 py-2">
            { options.map(( { title, isDangerButton, action }, index) => {
                return (
                    <button key={`options-b-${index}`} onClick={action} className={`${isDangerButton?"text-red-600 hover:text-red-800":"text-gray-600 hover:text-gray-900"} block w-full text-left px-4 py-2 cursor-pointer`}>
                        {title}
                    </button>    
                )
            })}
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
