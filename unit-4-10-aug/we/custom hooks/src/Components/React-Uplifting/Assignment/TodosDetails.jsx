import React from "react"
export function TodosDetails({ element, todos, SetTodos,SetCompleted,completed }) {
    
    return <div>
        <div>

        <h1>
        
        {element.value}
        </h1>
        
        </div>
        <div>
            
        <button onClick={() => { 
               const data = todos.filter((el) => {
                return el.id !== element.id;
               })
                
                SetCompleted([element,...completed])
                SetTodos([...data]);
                
        }}>Completed</button>

        <button onClick={() => {
            const data = todos.filter((el) => {
                return el.id !== element.id;
            })
            SetTodos([...data]);
        }}>Remove</button>
    </div>
        </div>
}