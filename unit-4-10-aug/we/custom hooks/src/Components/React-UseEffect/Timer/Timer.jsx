import React from "react"
import { TimerMain } from "./Components/TimerMain"
export function Timer() {
    const [initial, setInitial] = React.useState("");
    const [final, setFinal] = React.useState("");
    const [show, setShow] = React.useState(false);
    const Add=()=>{
        setShow(true);
        setFinal(final);
        setInitial(initial)
    }
    return <>
        <input type="text" placeholder="Initial Time" value={initial} onChange={(e) => {
            setInitial(e.target.value);
    }} ></input>
        <input type="text" placeholder="Final Time" value={final} onChange={(e) => {
            setFinal(e.target.value);
        }} ></input>
        <button onClick={() => {
            Add();
        }}>Submit</button>
        {show&&<TimerMain initial={Number(initial)} final={Number(final)} />}
    </>
}