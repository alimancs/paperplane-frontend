import React from "react";
import Feed from "./Feed";
import SideFeed from "./SideFeed";

const MainFeed:React.FC = () => {
    return (
        <div className="flex w-screen ">
            <Feed/>
            <SideFeed/>
        </div>
    )
}

export default MainFeed;