import { useCallback, useState } from "react"

import { MemorisedTodoItem, TodoItem } from "./TodoItem"
export const Todo = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleAdd = () => {
        const payload = {
            title: text,
            id: todos.length + 1,
            status: false
        }
        setTodos([...todos, payload])
    }
    const handleToggle = useCallback((id) => {
        const upDatedTodo = todos.map((item) => {
            return (item.id === id ? {
                ...item, status: !item.status
            } : item);
        })
        setTodos(upDatedTodo)
    }, [todos])
    const handleDelete = useCallback((id) => {
        const upDatedTodo = todos.filter((item) => {
            return item.id !== id;
        })
        setTodos(upDatedTodo)
    }, [todos])
    return <>
        <div>
            <input type="text" onChange={handleChange} value={text} />

            <button onClick={() => { handleAdd() }}>ADD</button>
        </div>
        <div>
            {
                todos.map((e, i) => {
                    return <div key={e.id}>
                        <TodoItem title={e.title} status={e.status} handleToggle={handleToggle} handleDelete={handleDelete} id={e.id} />
                    </div>
                })
            }
            {/* {
                todos.map((e, i) => {
                    return <div key={e.id}>
                        <MemorisedTodoItem title={e.title} status={e.status} handleToggle={handleToggle} handleDelete={handleDelete} id={e.id} />
                    </div>
                })
            } */}
        </div>
    </>

}