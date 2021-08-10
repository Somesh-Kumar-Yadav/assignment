import { useContext } from "react"
import { AppContext, constants } from "../Context/AppContext"

export default function Todos()  {
    const [state,dispatch]=useContext(AppContext)
    
    console.log(state, dispatch);
    return <>
        
    </>
}