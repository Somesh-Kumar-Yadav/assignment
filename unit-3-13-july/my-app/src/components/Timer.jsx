import React from 'react'

const Timer = ({hoursMinSecs}) => {
   
    const { hours, minutes, seconds } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    const [start, setStart] = React.useState(false);
    

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0)
            setStart(false)
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => {
        setTime([Number(hours), Number(minutes), Number(seconds)]);
        setStart(false)
    }
    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        if (start !== true) {
        clearInterval(timerId)    
        }
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <h3>Timer</h3>
            <p>{String(hrs)}h : {String(mins)}m : {String(secs)}s</p>
            <button onClick={() => {
                setStart(!start);
            }}>{start?"Stop":"Start"}</button>
            <button onClick={() => {
                reset();}}>Reset</button>
        </div>
    );
}

export default Timer;