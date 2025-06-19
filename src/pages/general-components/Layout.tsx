import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./header";
import Footer from "./Footer";
import colors from "../../utils/colors";

const Layout:React.FC = () => {
    return (
        <div className={`bg-[${colors.secondary}] w-full min-h-screen flex flex-col`}>
            <Header />
            <div className="flex-1 w-full overflow-hidden">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;