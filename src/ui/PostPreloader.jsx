import { useSelector } from "react-redux";
import { colorGrades } from "./theme";


export default function PostPreLoader() {
    const mode = useSelector( (state)=>state.mode);
    const palette = colorGrades(mode);


    return (
        <div style={{ height: 'fit-content', borderBottom: (palette.line)}} className='postcard'>
            <div  style={{ width: '100%', height: '190px', backgroundColor: (palette.preloader), borderRadius:'2px', animation: `${ mode === 'light'? 'lightModeLoader':'darkModeLoader'} 0.7s linear infinite`}} className='postCardImage' ></div>
            <div className='postInfo'>
                <div style={{ marginBottom: '10px'}} className='author'>
                <div  style={{ height:'30px', width:'30px', borderRadius:'2px', borderRadius:'50%', backgroundColor: (palette.preloader), animation: `${ mode === 'light'? 'lightModeLoader':'darkModeLoader'} 0.7s linear infinite` }} ></div>
                <div style={{ height:'22px', width:'130px', borderRadius:'2px', backgroundColor: (palette.preloader), animation: `${ mode === 'light'? 'lightModeLoader':'darkModeLoader'} 0.7s linear infinite` }} className='user'></div>
                </div>
                <div style={{ height:'35px', width:'100%', borderRadius:'2px', backgroundColor: (palette.preloader), animation: `${ mode === 'light'? 'lightModeLoader':'darkModeLoader'} 0.7s linear infinite` }}></div>
            <div className="postText">
                <div style={{ height:'23px', width:'100%', borderRadius:'2px', marginTop:'7px', backgroundColor: (palette.preloader), animation: `${ mode === 'light'? 'lightModeLoader':'darkModeLoader'} 0.7s linear infinite` }}></div>
                <div style={{ height:'23px', width:'100%', borderRadius:'2px', marginTop:'7px', backgroundColor: (palette.preloader), animation: `${ mode === 'light'? 'lightModeLoader':'darkModeLoader'} 0.7s linear infinite` }}></div>
            </div>
            <div className='author'>
                <div style={{ height:'23px', width:'60px', borderRadius:'2px', marginTop:'7px', backgroundColor: (palette.preloader), animation: `${ mode === 'light'? 'lightModeLoader':'darkModeLoader'} 0.7s linear infinite` }}></div>
            </div>
            </div>
        </div>
    )
}