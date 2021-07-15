import React from 'react'

const StopWatch = ({hoursMinSecs}) => {
   
    const { hours, minutes, seconds,milliseconds } = hoursMinSecs;
    const [[hrs, mins, secs,millisecs], setTime] = React.useState([hours, minutes, seconds,milliseconds]);
    const [start, setStart] = React.useState(false);
    

    const tick = () => {
    if (mins === 59 && secs === 59 && millisecs===99) {
            setTime([hrs + 1, 0, 0,0]);
        } else if (secs === 59 && millisecs===99) {
            setTime([hrs, mins + 1, 0,0]);
        } else if(millisecs===99){
            setTime([hrs, mins, secs + 1,0]);
    } else {
        setTime([hrs, mins, secs,millisecs+1]);
        }
    };


    const reset = () => {
        setTime([Number(hours), Number(minutes), Number(seconds),Number(milliseconds)]);
        setStart(false)
    }
    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 10);
        if (start !== true) {
        clearInterval(timerId)    
        }
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <h3>StopWatch</h3>
            <p>{String(hrs)}h : {String(mins)}m : {String(secs)}s : {String(millisecs)}ms</p>
            <button onClick={() => {
                setStart(!start);
            }}>{start?"Stop":"Start"}</button>
            <button onClick={() => {
                reset();}}>Reset</button>
        </div>
    );
}

export default StopWatch;