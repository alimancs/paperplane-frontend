import Header from "./Header";
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useSelector } from "react-redux";
import { colorGrades } from "./ui/theme";

export default function Layout() {
    const mode = useSelector( (state)=>state.mode );
    const palette = colorGrades( mode )

    return (
        <div style={{ backgroundColor: (palette.background)  }}>
        <Header/>
        <main>
        <Outlet></Outlet>
        </main>
        <Footer/> 
        </div>
    );
};