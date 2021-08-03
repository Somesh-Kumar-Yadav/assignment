import React from "react"
import { useState } from "react"
import { useDispatch, useSelector, useStore } from "react-redux";
import {v4 as uuid} from "uuid"
import { addTodo, toggleTodo } from "../../store/actions";
const TodoInput = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const handleTodo=() => {
        const payload = {
            title: task,
            status: false,
            id:uuid(),
        }
        dispatch(addTodo(payload))
    }
    return <>
        <input value={task} type="text" onChange={(e) => {
       setTask(e.target.value)     
        }}></input>
        <button onClick={() => {

            handleTodo();
        }}>ADD</button>
    </>
}
const TodoDisplay = () => {
    const list = useSelector((state) => state.todo)
    const dispatch = useDispatch()
    const HandleToggle = (id) => {
        dispatch(toggleTodo(id))
    }
    console.log(list)
    return <>
        {
            list.map((e) => {
                return <>
                    <h1>{e.title}</h1>
                    {e.status ? <button onClick={()=>{
                        HandleToggle(e.id)}}>True</button> : <button onClick={()=>{
                        HandleToggle(e.id)}}>False</button>}
            </>
            })
        }
    </>
}
export const Todo = () => {
    return <>
        <TodoInput />
        <TodoDisplay/>
    </>
}
