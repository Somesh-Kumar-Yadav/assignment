import React from "react"
import { v4 as uuid } from "uuid"
import {TodosItem} from "./TodosItem"
function TodosList({Todos,ToggleTodos}) {
    return <>
        {Todos.map((el) => {
            return <div>
            <TodosItem key={uuid()} items={el} toggle={ToggleTodos} />
            </div>
        })}
        </>
}
export {TodosList}