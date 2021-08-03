import React from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decCounter, incCounter } from "../../store/actions";
import { store } from "../../store/store"
export function Counter() {
    console.log(store.getState());
    const dispatch = useDispatch()
const counter = useSelector((state)=>state.counter)
    const isDisabled = useSelector((state)=>state.isDisabled)
    const handleInc = () => {
        dispatch(incCounter(1))
        
    }
    const handleDec = () => {
        dispatch(decCounter(1))
        
    }
    return <>
        <h2>Counter : {counter}</h2>
        <button  onClick={handleInc}>ADD</button>
        <button disabled={isDisabled} onClick={handleDec}>REDUCE</button>
    </>
} 