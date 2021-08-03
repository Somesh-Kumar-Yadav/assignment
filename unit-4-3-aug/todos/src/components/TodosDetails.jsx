import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import styled from "styled-components";
import { editTodos, toggleDisplay, toggleTodos } from "../store/actions";

const Title = styled.h1`
text-align: center;
`
const Details = styled.p`
margin-top: 50px;
margin-left: 10px;
margin-right: 10px;
`
const Status = styled.div`
position: absolute;
right: 20px;
top: 20px;
&>button{
    padding: 5px;
    color: #fff;
    background:${props => props.color?"green": "red"}; ;
}
`
const Home = styled.button`
position: absolute;
left: 20px;
top: 20px;
padding: 5px;
`
const EditBox = styled.div`
width: 50vw;
height: 40vw;
border: ${props => props.value==="true"?"none": "1px solid #222222"};;
border-radius: 10px;
position: absolute;
bottom: 10px;
left: 20vw;
display: flex;
align-items: center;
flex-direction: column;
&>button{
    padding: 5px;
    margin: 10px;
}
&>input{
width: 90%;
    padding: 5px;
    margin: 10px;
    outline: none;
}
&>textarea{
    padding: 5px;
    margin: 10px;
    width: 90%;
    height: 25vw;
    outline: none;
}
`
export function TodosDetails() {
    const id = useParams();
    const dispatch = useDispatch();
     
    const list = useSelector((state) => state)
    const todo = list.filter((e) => {
        return e.id === Number(id.id);
    })
    const [todos, setTodos] = React.useState(todo[0].title);
    const [todosDetails, setTodosDetails] = React.useState(todo[0].detail);
    const handleToggle = (id) => {
        dispatch(toggleTodos(id));
    }
    const handleDisplay = (id) => {
        dispatch(toggleDisplay(id));
    }
    const editedTodo = (id) => {
        const payload = {
            id: id,
            detail: todosDetails,
            title:todos
        }
        console.log(payload)
         dispatch(editTodos(payload));
        setTodos("");
        setTodosDetails("");
    }
    console.log(todo);
    return <>
            <Link to="/"><Home>Home </Home></Link>
        <Status color={todo[0].status}>
            <button onClick={() => {
                        handleToggle(todo[0].id);
                    }}>
            {
                todo[0].status?"Completed":"Incomplete" 
            }
            </button>
        </Status>
        {<div>
            <Title>{todo[0].title}</Title>
            <Details>{todo[0].detail }</Details>
        </div>
        }
        {
            todo[0].display===false ?<EditBox value="true">

          <button onClick={()=>{
              handleDisplay(todo[0].id)
            }} >Edit Details</button>
            </EditBox>  
                : <EditBox value="false">
              <button onClick={()=>{
                  handleDisplay(todo[0].id)
                    }}>Close Editing</button>
                <input type="text" value={todos} placeholder="Edit Todos" onChange={(e) => {
                setTodos(e.target.value);
                    }}></input>
            <textarea placeholder="Edit Details" value={todosDetails} onChange={(e)=>{
                setTodosDetails(e.target.value);
                    }}></textarea>
            <button onClick={()=>{
                  editedTodo(todo[0].id)
                    }}>Done</button>        
                </EditBox>
        }
    </>
}