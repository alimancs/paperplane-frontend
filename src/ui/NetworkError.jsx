import { useSelector } from "react-redux";
import { colorGrades } from "./theme";


export default function NetworkError() {
    const mode = useSelector( (state)=>state.mode);
    const palette = colorGrades(mode);
    return (
        <div style={{ width:'100%', textAlign:'center', height:'450px', paddingTop:'50px'}}>
        <span style={{ color: (palette.title), fontSize: '16px',}}>No internet connection, please refresh the page</span>
        </div>
    )
}