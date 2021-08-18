import React from "react"
import Button from "../Button/Button";

export default function Counter() {
    const [value, setValue] = React.useState(0);

    return (
        <>
            <h1 data-testid="counter_header">Counter</h1>
            <h3 data-testid="counter_value">{value}</h3>
            <div style={{display:"flex",gap:"1rem"}}>
                <Button label="ADD" onClick={()=>setValue(value+1)}/>
                <Button label="REDUCE" onClick={()=>setValue(value-1)}/>
            </div>
        </>
    )
}