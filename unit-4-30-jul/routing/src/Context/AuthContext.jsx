import React from "react"

export const AuthContext= React.createContext();
export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);
    return <AuthContext.Provider value={{ isAuth, setIsAuth}}>
        {children}
    </AuthContext.Provider>
}