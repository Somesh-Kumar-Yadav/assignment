import React from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { registerUser } from "../redux/auth/actions"
import { Redirect } from "react-router"

const Section = styled.div`
display: flex;
justify-content: center;
width: 100vw;
align-items: center;
flex-direction: column;
&>input{
    width: 400px;
    padding: 4px;
    height: 40px;
    margin: 10px;
    font-size: 18px;
}
&>button{
    width: 200px;
    padding: 4px;
    height: 40px;
    margin: 10px;
    font-size: 18px;
}
`
export function Register() {
    const [username,setUsername]=React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [mobile, setMobile] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [name, setName] = React.useState("")
    const dispatch = useDispatch();
    const {isAuth,isError,isLoading } = useSelector(state => state.auth,shallowEqual);

    const handleLogin = () => {
        console.log({username,password,email,mobile,description,name})
        dispatch(registerUser({username,password,email,mobile,description,name}))
        setPassword("");
        setUsername("");
        setEmail("");
        setDescription("");
        setMobile("");
        setName("");
    }
    if (isAuth) {
        return <Redirect to ="/dashboard"/>
    }
    if (isLoading) {
        return <div>...Loading</div>
    }
    return <Section>
        <h1>REGISTER PAGE</h1>
        <input type="text" placeholder="Name" value={name}onChange={(e)=>{
        setName(e.target.value)
    }}/>
        <input type="tel" placeholder="Mobile" value={mobile}onChange={(e)=>{
        setMobile(e.target.value)
    }}/>
        <input type="email" placeholder="Email" value={email}onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
    <input type="password" placeholder="Password" value={password} onChange={(e)=>{
        setPassword(e.target.value)
        }} />
    <input type="text" placeholder="Description" value={description} onChange={(e)=>{
        setDescription(e.target.value)
        }} />
    <input type="text" placeholder="Username" value={username} onChange={(e)=>{
        setUsername(e.target.value)
        }} />
        <button onClick={handleLogin}>LOGIN</button>
        {isError&&<div style={{color:"red"}}>Something went wrong</div>}
    </Section>
}