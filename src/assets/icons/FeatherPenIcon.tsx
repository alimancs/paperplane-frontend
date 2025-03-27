import React from "react";

interface components {
    bg:string,
    size:string,
}

const FeatherPenIcon:React.FC<components> = ( { bg, size } ) => {
    return (
        <svg fill="#17124f" width='30px' height='30px' viewBox="0 -0.11 33.736 33.736" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-287.982 -577.197)"> <path d="M288.983,610.716a1,1,0,0,1-.528-1.85c.141-.088,14.151-8.859,17.653-17.833a1,1,0,0,1,1.863.727c-3.745,9.6-17.863,18.434-18.462,18.8A.993.993,0,0,1,288.983,610.716Z"></path> <path d="M292.256,607.871l-.017-1.09a28.119,28.119,0,0,1,4.178-14.957l.3-.441h3.806L299.6,588.4l.293-.4c5.611-7.734,15.292-10.108,19.194-10.77a2.261,2.261,0,0,1,2.621,2.408c-1.791,25.095-28.105,28.1-28.371,28.125Zm5.547-14.488a26.983,26.983,0,0,0-3.554,12.23c4.909-.811,23.983-5.3,25.469-26.121a.275.275,0,0,0-.09-.232.224.224,0,0,0-.2-.06c-3.59.608-12.393,2.752-17.614,9.575l.776,2.529a1.607,1.607,0,0,1-1.536,2.079Z"></path> </g> </g></svg>
    )
}

export default FeatherPenIcon;