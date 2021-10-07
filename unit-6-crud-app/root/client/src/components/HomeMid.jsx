import React from 'react'
import styles from "../styles/home.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getData } from '../redux/auth/actions';
import { useHistory } from "react-router-dom";
import axios from "axios"

export const HomeMid = () => {
    const data = useSelector(state => state.auth.data);
    const total = useSelector(state => state.auth.pages);
    const [load, setLoading] = React.useState(true);
    const dispatch = useDispatch()
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.get("page") ? Number(queryParams.get("page")) : 1;
    const age = parseInt(queryParams.get("age"));
    const gender = queryParams.get("gender")
    const city = queryParams.get("city");
    const sort = queryParams.get("sort");
    const history = useHistory()
    const handleSort = (text) => {
        const p = 1;
        let st = `/?page=${p}`;
        if (age) {
            st += `&age=${age}`;
        }
        if (gender && gender !== "null") {
            st += `&gender=${gender}`;
        }
        if (city && city!=="null") {
            st += `&city=${city}`
        }
        if (text === "asce" || text==="desc") {
            st += `&sort=${text}`
        }
        dispatch(getData({ page, age, gender, city, sort: text }));
        history.push(st)
    }
    const handleDelete = async(id) => {
        await axios.delete(`http://localhost:2345/students/${id}`);
        dispatch(getData({ page, age, gender, city,sort}));
    }
    const handlePage = (num) => {
        const p = page + num;
        let st = `/?page=${p}`;
        if (age) {
            st += `&age=${age}`;
        }
        if (gender && gender !== "null") {
            st += `&gender=${gender}`;
        }
        if (city && city!=="null") {
            st += `&city=${city}`
        }
        if (sort && (sort === "asce" || sort==="desc")) {
            st += `&sort=${sort}`
        }
        dispatch(getData({p,age,gender,city,sort}));
        history.push(st);
    }
    React.useEffect(() => {
        dispatch(getData({ page, age, gender, city,sort }));
        setLoading(false);
    }, [dispatch,page,age,gender,city,sort]);
    if (load) {
        return <div>Loading...</div>
    }
    return <div className={styles.home_cont_mid}>
        <div className={styles.home_cont_mid_top}>
            <button onClick={()=>{handleSort("asce")}}>Sort Age increasing</button>
            <button onClick={()=>{handleSort("desc")}}> Sort Age decreasing</button>
            <button onClick={()=>{handleSort("")}}>Clear</button>
        </div>
        <div className={styles.home_cont_mid_mid}>
        {data.map(item => {
            return <div key={item._id} className={styles.home_cont_mid_card}>
                <p>{item.name}</p>
                <p  className={styles.age_para}>{item.age}</p>
                <p>{item.gender}</p>
                <p>{item.city}</p>
                <button className={styles.edit_btn} onClick={() => { history.push(`/edit/${item._id}`) }}>Edit</button>
                <button className={styles.delete_btn} onClick={() => { handleDelete(item._id) }}>Delete</button>
            </div>
        })
        }
    </div>
        <div className={styles.pagination}>
            <button disabled={page === 1} onClick={() => { handlePage(-1) }}>&lt;</button>
            <button>{page}/{ total}</button>
            <button disabled={page === total}  onClick={() => { handlePage(1) }}>&gt;</button>
        </div>
    </div>
}