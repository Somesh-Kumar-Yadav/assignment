import React from "react"

export const AuthContext= React.createContext();
export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const [token,setToken] = React.useState("")
    return <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken }}>
        {children}
    </AuthContext.Provider>
}