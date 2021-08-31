import React from "react"
export function TodosCompleted({ element,completed,SetCompleted }) {
    
    return <div style={{borderColor:"green"}}>
        <div>

        <h1 style={{color:"green",textDecorationLine:"line-through"}}>
        
        {element.value}
        </h1>
        
        </div>
        <div>
            
       

            <button style={{ borderColor: "green", color:"green"}} onClick={() => {
            const data = completed.filter((el) => {
                return el.id !== element.id;
            })
            SetCompleted([...data]);
        }}>Remove</button>
    </div>
        </div>
}