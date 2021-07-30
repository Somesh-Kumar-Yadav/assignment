import React from "react"
import { DashBoardComponent } from "./Components/DashBoardComponent"
import { Home } from "./Components/Home"

export function DashBoard() {
    return <>
        <Home />
        <DashBoardComponent/>
    </>
}