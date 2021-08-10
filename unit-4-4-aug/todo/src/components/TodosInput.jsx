import React from "react"
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { addTodosRequest, addTodosSuccess } from "../redux/app/actions";
import {v4 as uuid} from "uuid"

const InputBox = styled.div`
display: flex;
justify-content: center;
margin: 20px;
width: 100vw;
&>input{
    outline: none;
    padding: 4px;
    height: 40px;
    width: 400px;
    margin: 0 20px;
    font-size: 20px;
}
&>button{
    font-size: 16px;
    outline: none;
    padding: 4px;
    height: 40px;
    width: 100px;
    margin: 0 20px;
}
`
export function TodosInput() {
    const dispatch = useDispatch();
    const [todos, setTodos] = React.useState("");
    const handleTodos = () => {
        dispatch(addTodosRequest())
        const payload = {
            id: uuid(),
            title: todos,
            status:false
        }
        dispatch(addTodosSuccess(payload))
        setTodos("");
    }
    return <>
        <InputBox>
            <input onChange={(e) => {
                setTodos(e.target.value)
            }} value={todos} type="text" placeholder="+ Add Todos"/>
            <button onClick={handleTodos}>ADD</button>
        </InputBox>
    </>
}