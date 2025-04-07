import Loader from "../../../pages/general-components/Loader";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface components {
    processText:string,
}

const RegLoad:React.FC<components> = ( { processText } ) => {

    return (
        <div className="flex-1 flex flex-col justify-center items-center text-[#17124f] mx-auto  mt-[20px] md:w-[400px] w-[80%] gap-2">
                <div className="flex flex-col mt-[20px] md:w-[400px] w-[80%] justify-center items-center h-fit gap-2">
                    <Loader/>
                    <span className="text-[13px] text-center text-gray-500">{processText}</span>
                </div>
        </div>
    )
}

export default RegLoad;