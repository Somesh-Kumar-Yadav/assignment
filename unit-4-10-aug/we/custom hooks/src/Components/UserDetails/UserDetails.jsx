import axios from "axios";
import React, { useEffect } from "react"
import {Link} from "react-router-dom"

export function UserList() {
    const [users, setUsers] = React.useState([]);
    useEffect(() => {
        axios.get("https://reqres.in/api/users", {
            params: {
                page:2,
            }
        }).then(res => {
            console.log(res.data.data);
            setUsers(res.data.data);
        })
    },[])
    return <>
        {
            users.map((i)=> {
                return <div key={i.id}>
                    <Link to={"/users/" + i.id}><p>{ i.first_name +" "+i.last_name}</p></Link>  
                </div>
            })
    }
    </>
}