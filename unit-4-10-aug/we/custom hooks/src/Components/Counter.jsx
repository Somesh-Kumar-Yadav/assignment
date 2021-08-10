import "./Counter.css";
import React from "react";
const Counter =()=> {
	const [counter, setCounter] = React.useState(0);
	const useRef = React.useRef();
	React.useEffect(() => {
		HandleStart();
		},[])
	const HandleStart = () => {
		useRef.current = setInterval(() => {
			setCounter(prev => prev + 1);
		},1000)
	}
	const HandleStop = () => {
		clearInterval(useRef.current)
	}
	const Reset = () => {
		setCounter(0);
		
	}
	return (
		<div className="App">
			<h3>Counter: {counter}</h3>
			<button onClick={HandleStart}>Start</button>
			<button onClick={HandleStop}>Stop</button>
			<button onClick={Reset}>Reset</button>
		</div>
	);
}
// Always use PascalCase for file and components and files names
export { Counter };
