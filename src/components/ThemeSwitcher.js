import React, { useContext } from "react"
import {Context} from "./contexts/Context"
//import Image from "./undraw_dark_mode_2xam.png"
// import Sun from "../images/sun.svg"

function ThemeSwitcher(props) {
  const AppContext = useContext(Context)

  const handleThemeChange = () => {
    if( AppContext.bg === "dark"){
             AppContext.settingBg('dark') 
    }else{
            AppContext.settingBg('light') 
    }
    if( AppContext.color === "white"){
             AppContext.settingColor('white') 
    }else{
            AppContext.settingColor('') 
    }
     
}
  return ( 
      
    <div 
        onClick={handleThemeChange}
        className={`bg-${AppContext.bg === "dark" ? "dark" : "light"} p-2 text-${AppContext.color} `}
    >
           {AppContext.bg === "dark" ? 'Go Light' : "Go Dark"} 

    </div>
  )
}

export default ThemeSwitcher