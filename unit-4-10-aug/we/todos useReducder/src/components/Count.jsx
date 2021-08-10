import { useContext } from "react"
import { AppContext, constants } from "../Context/AppContext"

export default function Count()  {
    const [state,dispatch]=useContext(AppContext)
    console.log(state, dispatch);
    const handleAdd = () => {
        dispatch({
            type:constants.INCREMENT
        })
    }
    const handleReduce = () => {
        dispatch({
            type:constants.DECREMENT
        })
    }
    return <>
        <h2>{state.count}</h2>
        <div>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    </>
}