import React from "react"
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { addTodosFailure, addTodosRequest, addTodosSuccess, getTodos } from "../redux/app/actions";
import axios from "axios";

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
            title: todos,
            status:false
        }
        axios.post("http://localhost:3004/todos", payload).then((res) => {
            dispatch(addTodosSuccess(res.data))
            dispatch(getTodos());
        }).catch((err) => {
            dispatch(addTodosFailure(err.message));
        })
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