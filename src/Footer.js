import { Link } from "react-router-dom";

export default function Footer() {
 return (
    <div className="footer">
        <Link className="footerText" to={'/about'}>
        <span >About</span>
        </Link>
        <Link className="footerText" to={'/privacy-and-terms'}>
        <span >Privacy & Terms</span>
        </Link>
        <Link className="footerText" to={'/developer'}>
        <span >Developer</span>
        </Link>
    </div>
 )
}