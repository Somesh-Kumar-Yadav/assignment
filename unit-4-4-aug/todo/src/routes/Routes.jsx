import React from "react"
import { Route, Switch } from "react-router"
import { Todos } from "../components/Todos"
import { Link } from "react-router-dom"
import { Login } from "../components/Login"

export function Routes() {
    return <>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Link to="/" style={{marginRight:"10px"}}>Home</Link>
        <Link to="/login">Login</Link>
        </div>
        <Switch>
            <Route exact path="/"><Todos/></Route>
            <Route path="/login"><Login/></Route>
            <Route></Route>
        </Switch>
    </>
} 