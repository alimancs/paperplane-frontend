export const colorGrades = (mode) => {
    return {
    logo: "#33B738",
    ...(mode === 'light')?{
        line:'0.3px solid rgb(215, 215, 215)',
        background:'#F3F3F3',
        text: '#3f3d56',
        title: 'black',
        preloader: '#CECECE',
        subWidget:'#C4C4C4',
       } : {
        line:'0.3px solid rgb(106, 106, 106)',
        background:'rgb(48, 48, 48)',
        text: '#CECECE',
        title: 'white',
        preloader: '#5b5b5b',
        subWidget:'#414141',
       } 
    }
}