import React from "react";
import Feed from "./Feed";
import SideFeed from "./SideFeed";

const MainFeed:React.FC = () => {
    return (
        <div className="flex flex-row w-full h-full overflow-hidden">
            <div className="w-full md:w-2/3 overflow-auto">
                <Feed />
            </div>
            <div className="hidden md:block w-1/3 overflow-auto">
                <SideFeed />
            </div>
        </div>

    )
}

export default MainFeed;