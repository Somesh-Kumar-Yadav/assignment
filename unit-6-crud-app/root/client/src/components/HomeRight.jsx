import React from 'react'
import styles from "../styles/home.module.css"
import { useDispatch} from "react-redux";
import { getData } from '../redux/auth/actions';
import {useHistory} from "react-router-dom"

export const HomeRight = () => {
    const [gender, setGender] = React.useState("");
    const [city, setCity] = React.useState("");
    const [age, setAge] = React.useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const handleFilter = () => {
        let st = "/?page=1"
        if (isNaN(Number(age)) || (Number(age) < 0 || Number(age) > 100)) {
            alert("Age should be in between 1 to 100")
            return;
        }  
        if (city) {   
            setCity(city.toLowerCase());
            setCity(city.charAt(0).toUpperCase() + city.slice(1));
            st += `&city=${city}`
        }
        if (gender === "Select a Gender") {
            setGender("");
        } else {
            st += `&gender=${gender}`
        }
        if (age) {
            st+=`&age=${age}`
        }
        dispatch(getData({ page: 1, age, gender, city }));
        setCity("");
        setAge("");
        setGender("Select a Gender");
        history.push(st);
    }
    return <div className={styles.home_cont_right}>
        <div  className={styles.home_cont_left_cont}>
            <h4>Filter Box</h4>
            <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Enter age of student"/>
            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="Enter city of student"/>
            <select value={gender} onChange={(e)=> setGender(e.target.value)}>
                <option>Select a Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <button onClick={handleFilter}>Filter</button>
        </div>
    </div>
}