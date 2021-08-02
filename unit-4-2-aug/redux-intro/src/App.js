import "./App.css";
import { store } from "./Components/CustomCalculator/Store/store.js";
import { addCount } from "./Components/CustomCalculator/Store/actions.js";
import React from "react";

function App() {
	const [value, setValue] = React.useState(false);
	const handleChange = (num) => {
		store.dispatch(addCount(num));
		setValue((prev) => {
			return !prev;
		});
	};
	return (
		<div className="App">
			<h2>Count : {store.getState().count}</h2>
			<button
				onClick={() => {
					handleChange(1);
				}}
			>
				ADD 1
			</button>
			<button
				onClick={() => {
					handleChange(-1);
				}}
			>
				SUBTRACT 1
			</button>
		</div>
	);
}

export default App;
