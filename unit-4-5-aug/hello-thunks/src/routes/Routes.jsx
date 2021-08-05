import React from "react"
import { Route, Switch } from "react-router"
import { Link } from "react-router-dom"
import { Dashboard } from "../components/Dashboard"
import { Login } from "../components/Login"
import { ProfileDetails } from "../components/ProfileDetails"
import { Register } from "../components/Register"

export function Routes() {
    return <>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Link to="/" style={{marginRight:"10px"}}>Home</Link>
        <Link to="/login" style={{marginRight:"10px"}}>Login</Link>
        <Link to="/register" style={{marginRight:"10px"}}>Register</Link>
        <Link to="/dashboard" style={{marginRight:"10px"}}>DashBoard</Link>
        </div>
        <Switch>
            <Route exact path="/"><h1 style={{textAlign:"center"}}>HomePage</h1></Route>
            <Route path="/dashboard"><Dashboard/></Route>
            <Route path="/login"><Login/></Route>
            <Route exact path="/register"><Register/></Route>
            <Route path="/register/:name"><ProfileDetails/></Route>
            <Route><h1>Error 404</h1></Route>
        </Switch>
    </>
} 