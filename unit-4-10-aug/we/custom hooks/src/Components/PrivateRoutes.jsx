import { useContext } from "react"
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"

export const PrivateRoutes = ({ path, children }) => {
    const { auth } = useContext(AuthContext);
    if (!auth) {
        return <Redirect to="/login" />
    } else {
        return <>
            <Route path={path}>{children}</Route>
 </>    
    }
}