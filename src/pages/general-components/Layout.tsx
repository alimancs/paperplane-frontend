import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./header";
import Footer from "./Footer";

const Layout:React.FC = () => {
    return (
        <div>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;