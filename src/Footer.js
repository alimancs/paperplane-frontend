import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { colorGrades } from "./ui/theme";

export default function Footer() {
    const mode = useSelector( (state)=>state.mode);
    const palette = colorGrades(mode);
 return (
    <div style={{ color: (palette.text ), borderTop: (palette.line)}} className="footer">
        <Link className="footerText" to={'/about'}>
        <span >About</span>
        </Link>
        <Link className="footerText" to={'/privacy'}>
        <span >Privacy & Terms</span>
        </Link>
        <Link className="footerText" to={'/developer'}>
        <span >Developer</span>
        </Link>
    </div>
 )
}