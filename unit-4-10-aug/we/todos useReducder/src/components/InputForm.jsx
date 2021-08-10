import { useState } from "react"
import styled from "styled-components"
import useMergeState from "../hooks/useMergeState"
const Form = styled.div`
`
export default function InputForm() {
    const initState = {
  username: "",
  email: "",
  password: "",
    }
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useMergeState(initState);
    const handleSubmit = () => {
        const payload = {
            username,email,password
        }
        setUsername("");
        setEmail("");
        setPassword("");
        setState(payload);
    }
    console.log(state);
    return <>
        <Form>
            <input value={username} onChange={(e)=>{
                setUsername(e.target.value)
            }} type="text" placeholder="Username"/>
            <input value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} type="text" placeholder="Email"/>
            <input value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }} type="text" placeholder="Password"/>
            <button onClick={ handleSubmit}>Merge</button>
        </Form>
        {state.username!=="" &&<p>Username : {state.username}</p>}
        {state.email !== "" &&<p>Email : {state.email }</p>}
    </>
}