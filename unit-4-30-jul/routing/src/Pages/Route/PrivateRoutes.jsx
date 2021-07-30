import React, { useContext } from "react"
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext"

export function PrivateRoutes({children,path}) {
    const { isAuth } = useContext(AuthContext);
    console.log(!isAuth)
    if (!isAuth) {
        return <Redirect to="/login"></Redirect>
    } else {
        
        return <Route exact path={path}>{children}</Route>
    }
}