import React from "react";
import "./App.css";
import { Comments } from "./components/Comments";
import axios from "axios";

function App() {
	const [comments, setComments] = React.useState([]);
	React.useEffect(() => {
		axios.get("http://localhost:3002/comments").then((res) => {
			const arr = res.data.filter((item) => item.main);
			setComments([...arr]);
		});
	}, []);
	console.log(comments);
	return (
		<div className="App">
			{comments.map((item) => {
				return <Comments id={item.id} nums={0} key={item.id} />;
			})}
		</div>
	);
}

export default App;
