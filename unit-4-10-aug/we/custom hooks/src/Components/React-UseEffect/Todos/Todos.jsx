import React from "react"
import axios from "axios"
import {v4 as uuid} from "uuid"

axios.interceptors.request.use(
        function (config) {
            if (config.url.endsWith("5")) {
                console.log("Kaise laga mera mazak");
                return config;
            }
            return config;
        },
        function (err) {
            console.error("Error occured")
        }
    )

function Todos() {
    const [todos, setTodos] = React.useState("")
    const [todosList, setTodosList] = React.useState([]);
    let [page, setPage] = React.useState(1);
    React.useEffect(() => {
        setTimeout(() => {
            getTodos()
        }, 1000)

    }, [todosList,page]);

  const setTodo=(data) => {
      let arr = [];
     
                for (let i = page-1; i < page; i++){
                   arr.push(data[i]) 
                }
                setTodosList([...arr]) 
    }

    
    const getTodos = () => {
        try {
            axios.get("http://localhost:3004/todos").then(({ data }) => {
   
                setTodo(data)
            })
        }
        catch (error) {
            console.log(error);
        }
    }
    const deleteTodos=(id) => {
    axios.delete("http://localhost:3004/todos/"+id)
    }
    const toggleTodos = (id,status) => {
        axios.patch("http://localhost:3004/todos/" + id, { status: !status })
}
    
    const addTodos = () => {
        const payload = {
            title: todos,
            status: false,
        }
        axios.post("http://localhost:3004/todos", payload)
        setTodos("")
    }
    return <>
        <input type="text" value={todos} placeholder="Todos" onChange={(e) => {
            setTodos(e.target.value);
        }} />
        <button onClick={() => addTodos()}>Add</button>
        <div>
            {todosList.map((e) => {
                return <div key={uuid()}>
                    <h1>{e.title}</h1>
                    <p>{ `${e.status}`}</p>
                    <button onClick={() => {
                        deleteTodos(e.id);
                    }}>Remove</button>
                    <button onClick={() => {
                        toggleTodos(e.id,e.status);
                    }}>Toggle</button>
                </div>
            })}
        </div>
        <p>Page : {page}</p>
        <button onClick={
            () => {
                setPage((prev) => {
                    return prev - 1;
                })
            }
        }>Previous</button>
        <button onClick={ 
            () => {
                setPage((prev) => {
                    return prev + 1;
                })
            }
        }>Next</button>
    </>
}
export { Todos };
