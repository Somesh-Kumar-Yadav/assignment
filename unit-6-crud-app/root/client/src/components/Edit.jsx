import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import styles from "../styles/home.module.css"
import {useHistory} from "react-router-dom"

export const Edit = () => {
    const id = useParams().id;
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [city, setCity] = React.useState("");
    const [gender, setGender] = React.useState("Male");
    const [load, setLoad] = React.useState(true);
    const [user,setUser] = React.useState({name:"Somesh Kumar",age:1,city:"Valsad",gender:"Male"})
    const history = useHistory();
    const handleEdit = async () => {
        const payload = {}
        if (name.length !== 0) {
            payload.name=name
        }
        if ((Number(age) >= 1 || Number(age) <= 100) && !isNaN(Number(age)) ) {
            payload.age=Number(age)
        }
        setCity(city.toLowerCase());
        setCity(city.charAt(0).toUpperCase() + city.slice(1))
        if (city.length !== 0) {
            payload.city=city
        }
        payload.gender = gender;
        await axios.patch(`http://localhost:2345/students/${id}`,payload);
        history.goBack();
    }
    React.useEffect(() => {
        try {
            axios.get(`http://localhost:2345/students/${id}`).then((res) => {
                setUser(res.data.student);
                setLoad(false);
            });
        } catch (e) {
            console.log(e)
        }
        setName(user.name);
        setAge(user.age);
        setGender(user.gender);
        setCity(user.city)
    }, [user.name,user.age,user.gender,user.city,id])
    if (load) {
        return <div> Loading...</div>
    }
    return <div>
        <div  className={styles.edit_details}>
            <h4>Details</h4>
            <span>
                <p>Name : { user.name}</p>
                <p>Age : { user.age}</p>
                <p>Gender : { user.gender}</p>
                <p>City : { user.city}</p>
            </span>
        </div>
        <div className={styles.home_cont_left_cont}>
            <h4>Edit</h4>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder={ user.name}/>
            <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder={ user.age}/>
            <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder={ user.city}/>
            <select value={gender} onChange={(e)=> setGender(e.target.value)}>
                <option>Male</option>
                <option>Female</option>
            </select>
            <button onClick={handleEdit}>Save</button>
        </div>
    </div>
}