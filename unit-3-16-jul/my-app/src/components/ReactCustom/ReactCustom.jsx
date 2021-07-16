import React from "react"
import style from "./ReactCustom.module.css"

const DrawerItem = ({label}) => {
    return <div className={style.drawer} >
        <a href="#">{label}</a>
    </div>
}
const SiteName = ({children}) => {
    return <div className={style.site} >
        {children}
    </div>
}
const ToolBar = ({children}) => {
    return <nav className={style.tool} >
        {children}
    </nav>
}
export function ReactCustom() {
    return <div>
        <ToolBar>
    <SiteName>
        <DrawerItem label="SITENAME"/>
            </SiteName>
            <div className={style.cont}>

    <DrawerItem label="About us"/>
    <DrawerItem label="Prices"/>
    <DrawerItem label="Start Page"/>
    <DrawerItem label="Offer"/>
    <DrawerItem label="Contact"/>
            </div>
</ToolBar>
    </div>
}