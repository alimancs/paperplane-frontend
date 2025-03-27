import React from "react";

interface components {
    bg:string,
    size:string,
}

const StatsIcon:React.FC<components> = ( { bg, size } ) => {
    return (
    <svg width='30px' height='30px' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="statsIconTitle" stroke="#17124f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#17124f"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="statsIconTitle">Stats</title> <path d="M6 7L15 7M6 12L18 12M6 17L12 17"></path> </g></svg>
    )
}

export default StatsIcon;