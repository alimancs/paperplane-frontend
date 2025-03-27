import React from "react"

interface components {
    bg:string,
    size:string,
}

const NotificationIcon:React.FC<components> = ( { size, bg }) => {
    return (
        <svg width='35px' height='35px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="notification-bell"> <path id="vector" d="M14.8728 19.4434C14.8728 19.7467 14.7952 20.0471 14.6445 20.3274C14.4937 20.6077 14.2728 20.8623 13.9943 21.0769C13.7157 21.2914 13.385 21.4615 13.0211 21.5776C12.6572 21.6937 12.2671 21.7535 11.8732 21.7535C11.4793 21.7535 11.0893 21.6937 10.7253 21.5776C10.3614 21.4615 10.0307 21.2914 9.75221 21.0769C9.47368 20.8623 9.25273 20.6077 9.10199 20.3274C8.95124 20.0471 8.87366 19.7467 8.87366 19.4434" stroke="#17124f" strokeWidth="1.5" strokeLinecap="round"></path> <path id="vector_2" d="M19.6147 13.1897L19.8793 13.7605C20.8888 15.9374 19.5741 18.4819 17.2145 18.918L17.0543 18.9476C13.6293 19.5807 10.1172 19.5807 6.69218 18.9476C4.31327 18.5079 3.05472 15.876 4.20588 13.7483L4.43229 13.3298C5.05046 12.1872 5.37418 10.9085 5.37418 9.60942L5.37418 8.28813C5.37418 6.06434 6.63282 4.03213 8.62372 3.04138C10.678 2.0191 13.0852 1.98433 15.1681 2.94684L15.3728 3.04138C17.5063 4.02726 18.8723 6.16325 18.8723 8.51353L18.8723 9.82416C18.8723 10.9866 19.1256 12.1351 19.6147 13.1897Z" stroke="#17124f" strokeWidth="1.5"></path> </g> </g> </g></svg>
    )
}

export default NotificationIcon;
