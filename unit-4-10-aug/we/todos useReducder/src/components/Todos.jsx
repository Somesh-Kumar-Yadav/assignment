import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { AppContext, constants } from "../Context/AppContext";
import useFetch from "../hooks/useFetch";

export default function Todos() {
    const [todo, setTodo] = useState("");
    const [state, dispatch] = useContext(AppContext);
    const getTodos = () => {
        dispatch({
            type:constants.GET_TODOS_REQUEST
        })
        axios.get("http://localhost:3004/todos").then((res) => {
            console.log(res.data)
            dispatch({
                type: constants.GET_TODOS_SUCCESS,
                payload:res.data
                
            })
        }).catch((err) => {
            dispatch({
                type:constants.GET_TODOS_FAILURE
            })
        })
    }
    const postTodos = (payload) => {
        dispatch({
            type:constants.POST_TODOS_REQUEST
        })
        axios.post("http://localhost:3004/todos",payload).then((res) => {
            console.log(res.data)
            dispatch({
                type: constants.POST_TODOS_SUCCESS,
            })
        }).catch((err) => {
            dispatch({
                type:constants.POST_TODOS_FAILURE
            })
        })
    }
    useEffect(() => {
        getTodos();
    }, []);
    console.log(state);
    const handleAdd = () => {
        postTodos({title:todo,status:false})
        getTodos()
        setTodo("");
    }
    return <>
        <input value={todo} type="text" placeholder="+ add todos" onChange={(e) => {
            setTodo(e.target.value)
        }}></input>
        <button onClick={handleAdd}>Add</button>
        <div>
            {
                state.loading ? <p>LOADING.....</p> : state.todos.map((e) => {
                    return <p>{ e.title}</p>
                })
            }
        </div>

    </>
}