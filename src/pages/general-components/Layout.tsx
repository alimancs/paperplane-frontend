import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./header";
import Footer from "./Footer";
import colors from "../../utils/colors";

const Layout:React.FC = () => {
    return (
        <div className={`bg-[${colors.secondary}] w-full flex flex-col min-h-screen`}>
            <Header/>
            <div className="h-full">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;