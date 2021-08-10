import React from "react"

//Createa a global storage for me
export const ThemeContext= React.createContext();
export const ThemeContextProvider = ({ children }) => {

    const [theme,setTheme]=React.useState("light")
    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return <ThemeContext.Provider value={{
        theme, handleTheme
    }}>
        {children}
    </ThemeContext.Provider>
}