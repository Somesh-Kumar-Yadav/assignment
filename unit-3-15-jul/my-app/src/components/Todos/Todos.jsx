import React from "react"
import axios from "axios"
import { v4 as uuid } from "uuid"
import styles from "./Todos.module.css"

function Todos() {
    const [todos, setTodos] = React.useState("")
    const [todosList, setTodosList] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    
    React.useEffect(() => {
        getTodos()
    }, []);
    
    const addTodos = () => {
        const payload = {
            title: todos,
            status: false,
        }
        setIsLoading(true)
        axios.post("http://localhost:3004/todos", payload)
        setTodosList([...todosList, payload]);
        setIsLoading(false)
        setTodos("")
    }
        const getTodos = () => {
        try {
            setIsLoading(true);
            axios.get("http://localhost:3004/todos").then(({ data }) => {
                setTodosList([...data])
            })
        }
        catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return <>
            <input type="text" value={todos} placeholder="Todos" onChange={(e) => {
                setTodos(e.target.value);
            }} />
            <button onClick={() => addTodos()}>Add</button>
            <div>
                {todosList.map((e) => {
                    return <div className={styles.todos} key={uuid()}>
                        <h3>{e.title}</h3>
                    </div>
                })}
            </div>
        </>
    }
}
export { Todos };
