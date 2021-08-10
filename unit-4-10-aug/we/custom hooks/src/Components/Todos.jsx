import React from "react"
import axios from "axios"
// import { TodosInput } from "./TodosInput"
// import { TodosList } from "./TodosList"
function Todos() {
    const [todos,setTodos]=React.useState("")
    
    return <>
        <input type="text" value={todos} placeholder="Todos" onChange={(e) => {
            setTodos(e.target.value);
        }} />
        <button onClick={() => {
            const payload = {
                "title": todos,
                "status": false
            }
            axios("http://localhost:3000/todos",{payload} )
        }}>Add</button>
    </>
}
export { Todos };
/* <TodosInput HandleTodos={HandleTodos} Todos={ Todos }/>
<TodosList Todos={Todos} ToggleTodos={ToggleTodos }/> */
//const [todosList,setTodosList]=React.useState([])
    // let [Todos, setTodos] = React.useState([])
    // const HandleTodos = (item) => {
    //     setTodos([...Todos,item])
    // }
    // const ToggleTodos = (item)=>{
    //     item.id=!item.id
    // }