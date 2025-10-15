import { Outlet } from "react-router-dom";
import SideFeed from "../feed/SideFeed";
import { FC, useEffect, useRef, useState } from "react";

const NotificationsLayout:FC = () => {
    const sideFeedRef = useRef<HTMLDivElement>(null);
    const feedRef = useRef<HTMLDivElement>(null)
    const [ sideBarPosition, setSideBarPosition ] = useState<string>("");
    const lastScrollY = useRef(window.scrollY);
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    let sideBarCoord = 0;
    
    const isBottomVisible = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        
        // Check if the bottom is within the viewport
        return rect.bottom <= viewportHeight;
    };

    const calculateVisibleHeight = () => {
      if (feedRef.current) {
        const rect = feedRef.current.getBoundingClientRect();
        return Math.abs(rect.top) + viewportHeight;
      }
    };

    // Usage in React:
    useEffect(() => {
        // function to handle scroll and set side bar to a fixed form whenever client scrolls to a certain to the bottom of the side bar
        const handleScroll = () => {
            const presentFeedHeight = calculateVisibleHeight();
            const currentScrollY = window.scrollY;

            if ( currentScrollY < lastScrollY.current ) {
                if ( presentFeedHeight ) {
                    if ( presentFeedHeight <= sideBarCoord ) {
                        setSideBarPosition('static');
                        //set back to static
                        sideBarCoord = 0;
                        lastScrollY.current = currentScrollY;
                        return;
                    }
                }
            } 

            lastScrollY.current = currentScrollY;

            if (sideFeedRef.current) {
                if ( isBottomVisible(sideFeedRef.current) ) {
                    if (sideBarCoord===0) {
                        setSideBarPosition('fixed');
                        //set to fixed
                        if (presentFeedHeight) {
                            sideBarCoord = presentFeedHeight;
                            // side bar coordinate set to sideBarCoord
                        }
                    }
                } 
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-row w-full h-full">
            <div ref={feedRef} className="w-full md:w-2/3 md:px-[9%] pt-[35px] px-[5%] overflow-auto">
                <Outlet/>
            </div>
            <div ref={sideFeedRef} className={`${sideBarPosition} hidden bottom-0 right-0 md:block h-fit w-1/3`}>
                <SideFeed/>
            </div>
        </div>

    )
}

export default NotificationsLayout;