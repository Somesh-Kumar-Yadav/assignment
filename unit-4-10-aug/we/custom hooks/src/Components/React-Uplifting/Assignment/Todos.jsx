import { TodosInput } from "./TodosInput";
import { TodosList } from "./TodosList";
import React from "react";
import styles from "./Todos.module.css"
export function Todos() {
    const [todos, SetTodos] = React.useState([]);
    return <div className={styles.container}>
        <TodosInput todos={todos} SetTodos={ SetTodos} />
        <TodosList todos={todos} SetTodos={ SetTodos}/>
    </div>
}