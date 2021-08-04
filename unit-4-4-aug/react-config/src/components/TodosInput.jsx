import axios from "axios";
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodosFailure, addTodosRequest, addTodosSuccess, getTodosFailure, getTodosRequest, getTodosSuccess } from "../store/app/actions";

export const TodosInput = () => {
    const [todo, setTodo] = React.useState("");
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    React.useEffect(() => {
        getTodos();
},[])
    const getTodos = () => {
        dispatch(getTodosRequest())
        axios.get("http://localhost:3004/todos").then((res) => {
            dispatch(getTodosSuccess(res.data));
        }).catch((error) => {
            dispatch(getTodosFailure(error));
        })
}
    const postTodos = () => {
        dispatch(addTodosRequest())
        axios.post("http://localhost:3004/todos", { title: todo, status: false }).then((res) => {
            dispatch(addTodosSuccess());
        }).catch((error) => {
            dispatch(addTodosFailure());
        })
}
    console.log(data);
    const handleTodo = () => {
        postTodos();
        setTodo("");
    }
    return <>
    
        <input value={todo} type="text" onChange={(e) => {
            setTodo(e.target.value)
        }}/>
        <button onClick={() => {
            handleTodo();
        }}>ADD</button>
        <div>

        </div>

    </>
} 