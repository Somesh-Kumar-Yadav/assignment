import { useCallback, useState } from "react"
import { Box } from "../styles/styles";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
    const [text, setText] = useState("");
    const [body, setBody] = useState("");
    const [todos, setTodos] = useState([])
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleBody = (e) => {
        setBody(e.target.value)
    }
    const handleAdd = () => {
        const payload = {
            id: uuid(),
            title:text,
            body:body,
            verify: false
        }
        setTodos([...todos, payload])
    }
    const handleToggle = useCallback((id) => {
        const upDatedTodo = todos.map((item) => {
            return (item.id === id ? {
                ...item, verify: !item.verify
            } : item);
        })
        setTodos(upDatedTodo)
    }, [todos])
    return <>
        <Box>
            <input type="text" placeholder="Post Title" onChange={handleChange} value={text} />
            <textarea placeholder="Post Body" type="text" onChange={handleBody} value={body} />
            <button onClick={() => { handleAdd() }}>Post</button>
        </Box>
        <div>
            {
                todos.map((e, i) => {
                    return <div key={e.id}>
                        <TodoItem title={e.title} verify={e.verify} body={e.body} handleToggle={handleToggle} id={e.id} />
                    </div>
                })
            }
        </div>
    </>

}