import React from "react"
import { v4 as uuid } from "uuid";
export function TodosInput({todos,SetTodos}) {
    const [text, SetText] = React.useState("");
    return <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            const payload = {
                id:uuid(),
                value:text,
                status:false
            }
            const data = [...todos, payload];
            SetTodos(data);
            SetText("");
        }}
        >
        <input value={text} type="text" placeholder="Enter your Todos" onChange={(e) => {
            SetText(e.target.value)
            }} />
            <input type="submit" value="Submit"/>
        </form>
    </div>
}