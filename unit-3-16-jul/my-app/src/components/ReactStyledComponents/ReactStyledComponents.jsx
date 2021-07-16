import React from "react"
import style from "./ReactStyledComponents.module.css"

const Logo = () => {
    return <div className={style.logo} >
        <a href="#">HI I'M LOGO</a>
    </div>
}
const Link = () => {
    return <div className={style.link} >
        <a href="#">Login</a>
        <a href="#">About Us</a>
    </div>
}
const Navbar = ({children}) => {
    return <nav className={style.nav} >
        {children}
    </nav>
}
export function ReactStyledComponents() {
    return <div>
        <Navbar >
            <Logo />
            <Link />
        </Navbar>
    </div>
}