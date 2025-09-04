import React, { useEffect, useRef, useState } from "react";
import Feed from "./Feed";
import SideFeed from "./SideFeed";

const MainFeed:React.FC = () => {

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
        console.log('main feed bottom', Math.abs(rect.top)+viewportHeight);
        return Math.abs(rect.top) + viewportHeight;
      }
    };

    // Usage in React:
    useEffect(() => {
        const handleScroll = () => {
            const presentFeedHeight = calculateVisibleHeight();
            const currentScrollY = window.scrollY;

            if ( currentScrollY < lastScrollY.current ) {
                console.log("scrolled Up");
                if ( presentFeedHeight ) {
                    if ( presentFeedHeight <= sideBarCoord ) {
                        setSideBarPosition('static');
                        console.log("set back to static");
                        sideBarCoord = 0;
                        lastScrollY.current = currentScrollY;
                        return;
                    }
                }
            } 

            lastScrollY.current = currentScrollY;

            if (sideFeedRef.current) {
                if ( isBottomVisible(sideFeedRef.current) ) {
                    console.log('Side bar coord', sideBarCoord)
                    if (sideBarCoord===0) {
                        setSideBarPosition('fixed');
                        console.log("set to fixed");
                        if (presentFeedHeight) {
                            sideBarCoord = presentFeedHeight;
                            console.log("Side bar coords set to:", sideBarCoord);
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
            <div ref={feedRef} className="w-full md:w-2/3 overflow-auto">
                <Feed />
            </div>
            <div ref={sideFeedRef} className={`${sideBarPosition} hidden bottom-0 right-0 md:block h-fit w-1/3`}>
                <SideFeed />
            </div>
        </div>

    )
}

export default MainFeed;