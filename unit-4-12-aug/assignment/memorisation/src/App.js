import React, { useEffect } from "react";
import "./App.css";
import { Todo } from "./components/Todo";

function App() {
	const [timer, settimer] = React.useState(0);
	useEffect(() => {
		setInterval(() => {
			settimer((prev) => prev + 1);
		}, 1000);
	}, []);
	return (
		<div className="App">
			<div>Counter : {timer}</div>
			<Todo />
		</div>
	);
}

export default App;
