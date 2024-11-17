import { useSelector } from "react-redux";
import { colorGrades } from "./theme.js";

export default function Menu() {
    const mode = useSelector( (state)=> state.mode );
    const color = colorGrades(mode).text;

    return (
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}