import React from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { Redirect } from "react-router"
import { searchUser } from "../redux/user/actions"
import { Link } from "react-router-dom"

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
export function Dashboard() {
    const [username,setUsername]=React.useState("")
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch();
    const { isAuth,isError,isLoading } = useSelector(state => state.auth,shallowEqual);
    const { user } = useSelector(state => state.user,shallowEqual);

    const handleSearch = () => {
        dispatch(searchUser({ username,page }))
    }
    if (!isAuth) {
        return <Redirect to="/register"/> 
    }
    if (isLoading) {
        return <div>...Loading</div>
    }
    return <Section>
        <h1>DASHBOARD</h1>
        <input type="text" placeholder="Search" value={ username}onChange={(e)=>{
        setUsername(e.target.value)
    }}/>
        <button onClick={() => {
            setPage(1);
            handleSearch()
        }}>Search</button>
        {
            user.map((e) => {
                return <div key={e.id}>
                    <Link to={"/register/"+e.login}>{ e.login}</Link>
                </div>
            })
        }
        <Section>
        <button disabled={page===1} onClick={() => {
            setPage((prev)=>{
                return prev-1
            })
            handleSearch() }}>Prev</button>
        <button onClick={() => {
            setPage((prev)=>{
                return prev+1
            })
            handleSearch() }}>Next</button>
            </Section>
        {isError&&<div style={{color:"red"}}>Something went wrong</div>}
    </Section>
}