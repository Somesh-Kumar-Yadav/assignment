import React from "react"
import { AuthContext } from "../Context/AuthContext"
export const ButtonAny = () => {
    const value = React.useContext(AuthContext);
    return <>
    <button onClick={() => {
        value.setCounter((prev) => { return prev + 1;})
    }}>
        +
        </button>
         <button onClick={() => {
        value.setCounter((prev) => { return prev - 1;})
    }}>
        -
    </button>
        </>
}