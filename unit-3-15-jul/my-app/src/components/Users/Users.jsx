import React from "react"
import axios from "axios"
import { v4 as uuid } from "uuid"
import styles from "./Users.module.css"

function Users() {
    const [todos, setTodos] = React.useState("")
    const [todosList, setTodosList] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false);
    
        const getTodos = (name) => {
        try {
            setIsLoading(true);
            axios.get("https://api.github.com/search/users", {
                params:{
                    q:name
                }
            }).then(({ data }) => {
                console.log(data.items)
                setTodosList([...data.items])
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
            <div className={styles.input}>
            <input type="text" value={todos} placeholder="Todos" onChange={(e) => {
                setTodos(e.target.value);
            }} />
            <button onClick={() => getTodos(todos)}>Search</button>
            </div>
            <div>
                {
                    todosList.map((e) => {
                    return <div className={styles.users} key={uuid()}>
                        <h3>Username : {e.login}</h3>
                        <h4>Link : 
                         <a href={e.url}>{e.url}</a>
                        </h4>
                    </div>
                })}
            </div>
        </>
    }
}
export {Users};
