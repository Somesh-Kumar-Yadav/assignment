import React from "react";
import "./App.css";
import { Pin } from "./components/Pin";

function App() {
	const [text, setText] = React.useState("");
	const onChange = (value) => {
		setText(value);
	};
	return (
		<div className="App">
			<Pin text={text} length={5} onChange={onChange} perBox={1} />
			<h2>{text}</h2>
		</div>
	);
}

export default App;
