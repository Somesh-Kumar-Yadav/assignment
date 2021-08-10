import React from "react"

//Create a global storage for me
export const AuthContext= React.createContext();
export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = React.useState(false);
    return <AuthContext.Provider value={{
        auth,setAuth
    }}>
        {children}
    </AuthContext.Provider>
}