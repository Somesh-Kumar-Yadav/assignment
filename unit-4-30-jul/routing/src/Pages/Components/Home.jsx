import React from "react"
import { Link } from "react-router-dom"

export function Home() {
    return <>
        <ul style={{ display: "flex",listStyle:"none"}}>
            <li style={{margin:"10px"}}><Link to="/">Home</Link></li>
            <li style={{margin:"10px"}}><Link to="/login">Login</Link></li>
            <li style={{margin:"10px"}}><Link to="/dashboard/settings">Settings</Link></li>
            <li style={{margin:"10px"}}><Link to="/dashboard">Dashboard</Link></li>
    </ul>
    </>
}