import Loader from "../../../components/Loader";
import React from "react";

interface components {
    username:string,
}

const RegSuccess:React.FC<components> = ( { username } ) => {

    return (
        <div className="flex-1 flex flex-col justify-center items-center text-[#17124f] mx-auto  mt-[20px] md:w-[400px] w-[80%] gap-2">
                <div className="flex flex-col mt-[20px] md:w-[400px] w-[80%] justify-center items-center h-fit gap-2">
                    <Loader/>
                    <span className="text-[13px] text-center text-gray-500">{username} you have successfully created an account, redirecting...</span>
                </div>
        </div>
    )
}

export default RegSuccess;