import axios from "axios"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import styled from "styled-components"
import { loginFailure, loginSuccess } from "../redux/auth/actions"

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
export function Login() {
    const [username,setUsername]=React.useState("")
    const [password, setPassword] = React.useState("")
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);

    const handleLogin = () => {
        axios.post("https://reqres.in/api/login", {
            email: username,
            password:password
        }).then((res) => {
            console.log(res.data.token)
            dispatch(loginSuccess(res.data.token));
        }).catch((err) => {
            dispatch(loginFailure(err));
        })
        setPassword("");
        setUsername("");
    }
    if (isAuth) {
        return <Redirect to="/" />
    }
    return <Section>
        <h1>LOGIN PAGE</h1>
        <input type="email" placeholder="Email" value={ username}onChange={(e)=>{
        setUsername(e.target.value)
    }}/>
    <input type="password" placeholder="Password" value={password} onChange={(e)=>{
        setPassword(e.target.value)
        }} />
        <button onClick={handleLogin}>LOGIN</button>
    </Section>
}