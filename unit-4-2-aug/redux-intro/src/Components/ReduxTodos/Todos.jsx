import { store } from "./Store/store.js";
import { addTodos, deleteTodos, toggleTodos,toggleDisplay } from "./Store/actions.js";
import React from "react";
import styled from "styled-components";

const Section = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

&> button{
    padding: 4px;
    width: 100px;
    height: 40px;
}
& >input{
    outline: none;
    padding: 4px;
    margin: 10px;
    width: 300px;
    height: 40px;
    font-size: 20px;
}
`
const Display = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:20px;
padding :10px;

`
const TodosCart = styled.div`

    display: flex;
   color:${props => props.color === "false" ? "green" : "red"};
   text-decoration:${props => props.color === "true" ? "line-through" : "none"};
   padding: 5px;
   border-bottom: 1px solid #222222 ;
   width: 90%;
   justify-content: space-between;
   align-items: center;
& p{
    font-size: 32px;
    margin: 10px;
    padding: 5px;
}
& button{
      padding: 4px;
    width: 100px;
    height: 40px;
    margin: 0 10px;

}
`

export function Todos() {
    const [, setValue] = React.useState(false);
    const [todos, setTodos] = React.useState("");
    const list = store.getState();
    const handleToggle = (id) => {
        store.dispatch(toggleTodos(id));
        setValue((prev) => {
            return !prev;
        })
    }
    const handleDisplay = (id) => {
        store.dispatch(toggleDisplay(id));
        setValue((prev) => {
            return !prev;
        })
    }
    const handleDelete = (id) => {
        store.dispatch(deleteTodos(id));
        setValue((prev) => {
            return !prev;
        })
    }
    const handleTodos = () => {
        const len = store.getState().length;
        let id;
        if (len === 0) {
             id = 1;
        } else {
             id = (store.getState()[len-1].id)+1
        }
        const payload = {
            title: todos,
            status: false,
            id: id,
            display:false,
        }
        store.dispatch(addTodos(payload));
        setTodos("");
    }
    return (<>
        <Section>
            <input type="text" value={todos} placeholder="Add Todos" onChange={(e) => {
                setTodos(e.target.value);
            }}></input>
            <button onClick={() => {
                handleTodos();
            }}>Submit</button>
        </Section>
        <Display>
            {list.map((e) => {
                return <TodosCart key={e.id} color={`${e.status}`}>
                    <p>{e.title}</p>
                    {e.display?<div>
                    <button onClick={() => {
                        handleToggle(e.id)
                    }}>Toggle</button>
                    <button onClick={() => {
                        handleDelete(e.id)
                        }}>Delete</button>
                    <button onClick={() => {
                        handleDisplay(e.id)
                    }}>Close</button></div>
                        : <div><button onClick={() => {
                        handleDisplay(e.id)
                    }}>Edit</button></div>}
                    
                </TodosCart>
            })}
        </Display>
        </>
	);
}