import {  useDispatch, useSelector } from "react-redux";
import { TodosInput } from "./TodosInput";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import { getTodos } from "../redux/app/actions";

const Span = styled.span`
display: flex;
justify-content: center;
width: 100vw;
&>h3{
    margin: 5px;
    font-size: 16px;
    font-weight: 500;
}
`
export function Todos() {
    const token = useSelector(state=>state.auth.token)
    const isAuth = useSelector(state => state.auth.isAuth);
    const list = useSelector((state) => state.app.todos)
    const isLoading = useSelector((state) => state.app.isLoading)
    const dispatch = useDispatch()
    console.log(list);
    useEffect(() => {
        dispatch(getTodos())
    },[dispatch])
    if (!isAuth) {
        return <Redirect to="/login"></Redirect>
    }
    if (isLoading) {
        return <div>...Loading</div>
    }
    return <>
        <p style={{margin:"10px"}}>token : {token}</p>
        <TodosInput />
        {
            list.map((e) => {
                return <Span key={e.id}><h3>{e.title}</h3></Span>
            })
        }
    </>
}