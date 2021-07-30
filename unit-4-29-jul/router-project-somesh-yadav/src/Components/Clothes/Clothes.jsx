import React from "react"
import { Footer } from "../Footer/Footer"
import { NavBar } from "../NavBar/NavBar"
import { ClothesCategory } from "./ClothesCategory"
import { Products } from "./Products"
export function Clothes() {
    return <>
        <NavBar/>
        <ClothesCategory />
        <Products/>
        <Footer/>
    </>
}