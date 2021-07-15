import axios from "axios";
import React from "react";
export function UserFormInput({setToggle}) {
    const [formData, setFormData] = React.useState({});
    
    const HandleChange = (e) => {
		const { value, name, checked, type } = e.target;
		setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
        console.log(formData)
    };
    
    const SubmitData = () =>{
        axios.post("http://localhost:3004/employee", formData)
        setToggle((prev) => {
            return !prev;
        })
    }
    return <div>
        
         <form onSubmit={SubmitData}>
				<label htmlFor="name">
					Name : 
					<input
						onChange={HandleChange}
						type="text"
						name="name"
						placeholder="Enter Employee's Name"
					></input>
				</label>
				<label htmlFor="age">
					Age : 
					<input
						onChange={HandleChange}
						type="text"
						name="age"
						placeholder="Enter Employee's Age"
					></input>
				</label>
				<label htmlFor="address">
					Address : 
					<input
						onChange={HandleChange}
						type="text"
						name="address"
						placeholder="Enter Employee's Address"
					></input>
            </label>
            <label htmlFor="department">
                Department :   
                <select onChange={HandleChange} name="department">
                    <option>None</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                    <option>Technical</option>
                    <option>Human Resource</option>
                </select>	
            </label>
            <label htmlFor="salary">
					Salary : 
					<input
						onChange={HandleChange}
						type="number"
						name="salary"
						placeholder="Enter Employee's Salary"
					></input>
            </label>
				<label htmlFor="ismarried">
					isMarried :  
					<input
						onChange={HandleChange}
						type="checkbox"
						name="ismarried"
					></input>
				</label>
				
            <label htmlFor="files">
                    <input
						onChange={HandleChange}
						type="file"
						name="files"
					></input>
            </label>
					<input onChange={HandleChange} type="submit"></input>
		</form>
    </div>
}