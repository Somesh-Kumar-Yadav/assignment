import React from "react";
const Clock =()=> {
	let [seconds, setSeconds] = React.useState(0);
	let [minutes, setMinutes] = React.useState(0);
	let [hours, setHours] = React.useState(0);
    let [show, setShow] = React.useState(true);

    const start = (v) => {
        let id;
        if (v) {
            id = setInterval(() => {
                seconds = new Date().getSeconds();
                minutes = new Date().getMinutes();
                hours = new Date().getHours();
                setSeconds(seconds)
                setMinutes(minutes)
                setHours(hours)
            },1000)
        } else {
            setShow(!show);
            clearInterval(id);
        }
        
    }
	
	return (
		<div className="App">
            {show&&<h3>{hours} : {minutes} : {seconds}</h3>}
            <button onClick={() => {
                start(true);
            }}>Start</button>
            <button onClick={() => {
                start(false);
            }}>{show?"Hide Clock":"Show Clock" }</button>
		</div>
	);
}
export { Clock };
