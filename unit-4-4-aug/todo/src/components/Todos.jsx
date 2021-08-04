import { useDispatch, useSelector } from "react-redux";
import { TodosInput } from "./TodosInput";

import styled from "styled-components";
import { Redirect } from "react-router-dom";

const Span = styled.span`
display: flex;
justify-content: center;
width: 100vw;
`
export function Todos() {
    const token = useSelector(state=>state.auth.token)
    const isAuth = useSelector(state => state.auth.isAuth);
    const list = useSelector((state) => state.app.todos)
    console.log(list);
    if (!isAuth) {
        return <Redirect to="/login"></Redirect>
    }
    return <>
        <p>token : { token}</p>
        <TodosInput />
        {
            list.map((e) => {
                return <Span key={e.id}><h3>{e.title}</h3></Span>
            })
        }
    </>
}