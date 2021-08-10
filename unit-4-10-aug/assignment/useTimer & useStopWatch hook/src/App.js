import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import useStopWatch from "./hooks/useStopWatch";
import useTimer from "./hooks/useTimer";
const Time = styled.div`
	display: flex;
	justify-content: center;
`;

function App() {
	const initTime = {
		hours: 0,
		minutes: 5,
		seconds: 5,
	};
	const initTime_2 = {
		hours: 0,
		minutes: 0,
		seconds: 0,
	};
	const [value, setValue] = useState(true);
	const { time, stopTimer, startTimer, resetTimer } = useTimer(initTime);
	const { time_2, stopStopWatch, startStopWatch, resetStopWatch } =
		useStopWatch(initTime_2);
	console.log(time_2);
	return (
		<div className="App">
			{value ? (
				<button
					onClick={() => {
						setValue(!value);
					}}
				>
					Toggle to Stopwatch
				</button>
			) : (
				<button
					onClick={() => {
						setValue(!value);
					}}
				>
					Toggle to Timer
				</button>
			)}
			{value ? (
				<div>
					<h6>Timer</h6>
					<Time>
						<p>
							{time[0]}
							{time[0] === 1 ? "hr" : "hrs"}
						</p>
						<p>:</p>
						<p>
							{time[1]}
							{time[1] === 1 ? "min" : "mins"}
						</p>
						<p>:</p>
						<p>
							{time[2]}
							{time[2] === 1 ? "sec" : "secs"}
						</p>
					</Time>
					<button onClick={startTimer}>Start</button>
					<button onClick={stopTimer}>Stop</button>
					<button onClick={resetTimer}>Reset</button>
				</div>
			) : (
				<div>
					<h6>StopWatch</h6>
					<Time>
						<p>
							{time_2[0]}
							{time_2[0] === 1 ? "hr" : "hrs"}
						</p>
						<p>:</p>
						<p>
							{time_2[1]}
							{time_2[1] === 1 ? "min" : "mins"}
						</p>
						<p>:</p>
						<p>
							{time_2[2]}
							{time_2[2] === 1 ? "sec" : "secs"}
						</p>
					</Time>
					<button onClick={startStopWatch}>Start</button>
					<button onClick={stopStopWatch}>Stop</button>
					<button onClick={resetStopWatch}>Reset</button>
				</div>
			)}
		</div>
	);
}

export default App;
