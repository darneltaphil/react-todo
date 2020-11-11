import React, { useContext } from "react"
import {Context} from "./contexts/Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faMoon, faPlusCircle, faSun } from "@fortawesome/free-solid-svg-icons"


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
      
    <div icon={faPlusCircle} 
        onClick={handleThemeChange}
        className={`bg-${AppContext.bg === "dark" ? "dark" : "light"} p-2 text-${AppContext.color} `}
    >    
        

           {AppContext.bg === "dark" ? <><FontAwesomeIcon icon={faSun} size="" />  Go Light</> : <><FontAwesomeIcon icon={faMoon} size="" />  Go Dark</>} 

    </div>
  )
}

export default ThemeSwitcher