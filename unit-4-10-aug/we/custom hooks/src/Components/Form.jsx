import React from "react"
import  styled  from "styled-components";
 
function CreateForm({ children, onSubmit }) {
    return <div>
            {children}
            <input onClick={onSubmit} type="submit"></input>
    </div>
}
const Wrapper=styled.div`
color:${(props)=>props.color?"red":"blue"};
font-size:30px;
border: 1px solid black;
text-align:center

input {
    border:none;
    width:800px;
}
&:hover{
    font-size:20px;
}
`



export function Form() {
    const [light, setlight] = React.useState(true);
    const Submit = (e) => {
        e.preventDefault();
        console.log("hii");
    }
    const Submit_2 = (e) => {
        e.preventDefault();
        console.log("bye");
    }
    return <div>
        <CreateForm onSubmit={Submit}>
            <label for="Name">
                <input type="text" placeholder="Enter your Name"></input>
            </label>
            <label for="Country">
                <input type="text" placeholder="Enter your Country"></input>
            </label>
            <label for="Number">
                <input type="number" placeholder="Enter your Number"></input>
            </label>
        </CreateForm>
        <Wrapper color={light} >
            Hii
        </Wrapper>
        <button onClick={() => {
            setlight(!light);
            }}>Change</button>
        <CreateForm onSubmit={Submit_2}>
            <label for="Email">
                <input type="email" placeholder="Enter your Email"></input>
            </label>
            <label for="Department">
                <input type="text" placeholder="Enter your Department"></input>
            </label>
            <label for="Age">
                <input type="number" placeholder="Age"></input>
            </label>
        </CreateForm>
    </div>
}