import { TodosDetails } from "./TodosDetails"
import { TodosCompleted } from "./TodosCompleted"
import React from "react";
export function TodosList({ todos, SetTodos }) {
    const [completed, SetCompleted] = React.useState([]);
    return <div>
        {
            todos.map((el) => {
                return <>
                    <TodosDetails key={el.id} element={el} todos={todos} SetTodos={SetTodos} completed={completed} SetCompleted={SetCompleted} />
                </>
            })
        }
        <h1>Completed Todos</h1>
        {
        completed.map((el) => {
            return <>
                <TodosCompleted completed={completed} SetCompleted={SetCompleted} element={ el}/>
             </>
        })
        }
    </div>
}