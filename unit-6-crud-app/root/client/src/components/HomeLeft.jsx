import React from 'react'
import styles from "../styles/home.module.css"
import axios from "axios"

export const HomeLeft = () => {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState("");
    const [city, setCity] = React.useState("");
    const [gender, setGender] = React.useState("Male");

    const handleAdd = async() => {
        if (name.length === 0 || isNaN(Number(age)) || city.length === 0) {
            alert("Fill proper fields");
            return;
        }
        if (Number(age) <= 1 || Number(age) > 100) {
            alert("Age should be in between 1 to 100")
            return;
        }
        setCity(city.toLowerCase());
        const payload = {
            name: name,
            age:Number(age),
            city: city.charAt(0).toUpperCase() + city.slice(1),
            gender:gender
        }
        await axios.post(`http://localhost:2345/students`, payload);
        setName("");
        setAge("");
        setCity("");
        alert("user added")
    }
    return <div className={styles.home_cont_left}>
        <div className={styles.home_cont_left_cont}>
            <h4>Add a Student</h4>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter fullname of student"/>
            <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Enter age of student"/>
            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="Enter city of student"/>
            <select onChange={(e)=> setGender(e.target.value)}>
                <option>Male</option>
                <option>Female</option>
            </select>
            <button onClick={handleAdd}>Add</button>
        </div>
    </div>
}