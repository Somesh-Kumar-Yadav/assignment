import React from "react";
import "./App.css";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";

function App() {
	let [Timer_hoursMinSecs, setTimer_hoursMinSecs] = React.useState({
		hours: 0,
		minutes: 5,
		seconds: 0,
	});
	const [hours, setHours] = React.useState(0);
	const [minutes, setMinutes] = React.useState(0);
	const [seconds, setSeconds] = React.useState(0);
	const StopWatch_hoursMinSecs = {
		hours: 0,
		minutes: 0,
		seconds: 0,
		milliseconds: 0,
	};
	const [state, setState] = React.useState(false);
	const HandleChange = (e) => {
		e.preventDefault();
		console.log(hours, minutes, seconds);
		const data = {
			hours: Number(hours),
			minutes: Number(minutes),
			seconds: Number(seconds),
		};
		setTimer_hoursMinSecs({ ...data });
		console.log(Timer_hoursMinSecs);
	};
	return (
		<div className="App">
			<button
				onClick={() => {
					setState(false);
				}}
			>
				Timer
			</button>
			<button
				onClick={() => {
					setState(true);
				}}
			>
				StopWatch
			</button>
			{state ? (
				<div>
					<StopWatch hoursMinSecs={StopWatch_hoursMinSecs}></StopWatch>
				</div>
			) : (
				<div>
					<form onSubmit={HandleChange}>
						<input
							placeholder="hrs"
							onChange={(e) => {
								setHours(e.target.value);
							}}
							type="number"
							name="hours"
						/>
						<input
							placeholder="mins"
							onChange={(e) => {
								setMinutes(e.target.value);
							}}
							type="number"
							name="minutes"
						/>
						<input
							placeholder="secs"
							onChange={(e) => {
								setSeconds(e.target.value);
							}}
							type="number"
							name="seconds"
						/>
						<input placeholder="Submit" type="submit" name="hours" />
					</form>
					<Timer hoursMinSecs={Timer_hoursMinSecs}></Timer>
				</div>
			)}
		</div>
	);
}

export default App;
