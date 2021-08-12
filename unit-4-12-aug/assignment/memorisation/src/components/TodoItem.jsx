import React, { useMemo } from "react"
import { Button, Card } from "../styles/styles";
const delay = (time) => {
    const start = Date.now();
    while (Date.now() - start < time) {
        continue;
    }
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
export function TodoItem({ id, title, verify,body,handleToggle }) {
    const color = useMemo(() => delay(200), [])


    return <Card color={color} key={id}>
        <div>
            <h4>{ title}</h4>
            <p>{ body}</p>
        </div>
        <Button color={verify} onClick={() => handleToggle(id)}>{verify?"Verified":"Verify"}</Button>
    </Card>
}
