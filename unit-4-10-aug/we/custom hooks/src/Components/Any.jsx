import { AuthContext } from "../Context/AuthContext"
import React from "react"
export const Any = () => {
    const value = React.useContext(AuthContext);
    console.log(value)
    return <div>
        <h1>
            {value.counter}
        </h1>
    </div>

}