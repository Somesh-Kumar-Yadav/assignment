import { useState } from "react";
import { useDebounce } from "use-debounce-hook";
import "./App.css";
// import Count from "./components/Count";
// import useFetch from "./hooks/useFetch";
import useTimeout from "./hooks/useTimeout";

function App() {
	const [ready] = useTimeout(5000);
	console.log(ready);
	return (
		<div className="App">{ready && <h1>Appeared after 5 seconds</h1>}</div>
	);
}

export default App;
