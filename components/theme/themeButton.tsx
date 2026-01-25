'use client'
import {useGlobalContext} from "@/context/globalContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export  default  function ThemeButton(){
    const {mode, setMode}= useGlobalContext();
    function changeTheme(){
        setMode((prev: string)=>prev==='dark'?'light':'dark');
    }
    return(
        <button onClick={changeTheme} style={{background:'transparent', border:'none'}}>
            {mode === 'dark'? <DarkModeIcon sx={{color:'white'}}/> : <LightModeIcon/> }
        </button>
    )
}
