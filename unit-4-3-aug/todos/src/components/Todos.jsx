import { addTodos, deleteTodos, toggleTodos } from "../store/actions.js";
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
   
    padding: 5px;
    border-bottom: 1px solid #222222 ;
    width:90%;
    justify-content: space-between;
    align-items: center;
& p{
     color:${props => props.color === "false" ? "green" : "red"};
    text-decoration:${props => props.color === "true" ? "line-through" : "none"};
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
& button>a{
      text-decoration: none;
      color: #222222;

}
`
const InputDetail = styled.div`
display: flex;
justify-content: center;
align-items: center;
&>textarea{
    width: 400px;
    height: 300px;
    padding: 5px;
    font-size: 20px;
    outline: none;
}
`
export function Todos() {
    const dispatch = useDispatch();
    const list = useSelector((state)=>state)
    const [todos, setTodos] = React.useState("");
    const [todosDetails, setTodosDetails] = React.useState("");
    const handleToggle = (id) => {
        dispatch(toggleTodos(id));
    }
    
    const handleDelete = (id) => {
        dispatch(deleteTodos(id));
    }
    const handleTodos = () => {
        const len = list.length;
        let id;
        if (len === 0) {
             id = 1;
        } else {
             id = (list[len-1].id)+1
        }
        const payload = {
            title: todos,
            status: false,
            id: id,
            display: false,
            detail:todosDetails
        }
        dispatch(addTodos(payload));
        setTodos("");
        setTodosDetails("");
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
        <InputDetail>
            <textarea placeholder="Add Details" value={todosDetails} onChange={(e)=>{
                setTodosDetails(e.target.value);
            }}></textarea>
        </InputDetail>
        <Display>
            {list.map((e) => {
                return <TodosCart key={e.id} color={`${e.status}`}>
                    <p>{e.title}</p>
                    <div>
                    <button onClick={() => {
                        handleToggle(e.id);
                    }}>{e.status?"Undo":"Done"}</button>
                    <button onClick={() => {
                        handleDelete(e.id);
                    }}>Delete</button>
                    <button><Link to={`/todos/${e.id}`}>Details</Link></button>
                    </div>
                </TodosCart>
            })}
        </Display>
        </>
	);
}