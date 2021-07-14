import React from "react";
import { BlogPostList } from "./BlogPostList";
import style from "./BlogPost.module.css"
export function BlogPost() {
    const [formData, setFormData] = React.useState({});
    const [formDataList, setFormDataList] = React.useState([]);
	const [sortData, setSortData] = React.useState(formDataList);
	const Sort = (value) => {
		setSortData(() => {
			return formDataList.filter((e) => {
				console.log(value,e.private)
				return e.private === value;
			})
		})
}
	const HandleChange = (e) => {
		const { value, name, checked, type } = e.target;
		setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
	};
	const GetData = (e) => {
		e.preventDefault();
		setFormDataList([...formDataList, formData])
		setSortData([...formDataList, formData])
		console.log(formDataList)
	};
    return <>
        <form className={style.form}
            onSubmit={GetData}>
				<label htmlFor="title">
					Title : 
					<input
						onChange={HandleChange}
						type="text"
						name="title"
						placeholder="Enter blog title"
					></input>
				</label>
				<label htmlFor="body">
					Body : 
					<input
						onChange={HandleChange}
						type="text"
						name="body"
						placeholder="Write your content here"
					></input>
				</label>
				<label htmlFor="author">
					Author : 
					<input
						onChange={HandleChange}
						type="text"
						name="author"
						placeholder="Author name"
					></input>
				</label>
				<label htmlFor="private">
					Private :  
					<input
						onChange={HandleChange}
						type="checkbox"
						name="private"
					></input>
				</label>
				<label htmlFor="category">
                Category :   
                <select onChange={HandleChange} name="category">
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Business</option>
                    <option>Sports</option>
                </select>	
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
		<button onClick={() => {
            Sort(true);
        }}>Private</button>
		<button onClick={() => {
            Sort(false);
        }}>Non-Private</button>
		<button onClick={() => {
            setSortData([...formDataList]);
        }}>All Blogs</button>
		<BlogPostList list={ sortData }/>
    </>
}