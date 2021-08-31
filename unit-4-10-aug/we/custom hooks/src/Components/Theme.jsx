import React from "react"
import { ThemeContext } from "../Context/ThemeContext"


export const Theme = () => {
const value =React.useContext(ThemeContext)
    return <div style={{backgroundColor:value.theme==="light"?"pink":"black"}}>
        
        <button onClick={value.handleTheme}>Change</button>
    </div>
}