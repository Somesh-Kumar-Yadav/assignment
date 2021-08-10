import { useEffect, useState } from "react";

export default function useStopWatch (initTime_2) {
    const { hours, minutes, seconds } = initTime_2;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    const [start, setStart] = useState(false);
    

    const tick = () => {
        if (mins === 59 && secs === 59) {
            setTime([hrs + 1, 0, 0,]);
        } else if (secs === 59) {
            setTime([hrs, mins + 1, 0,]);
        } else {
            setTime([hrs, mins, secs+1]);
        }
    };


    const resetStopWatch = () => {
        setTime([Number(hours), Number(minutes), Number(seconds)]);
        setStart(false)
    }
    const startStopWatch = () => {
        setStart(true)
    }
    const stopStopWatch = () => {
        setStart(false)
    }
    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        if (start !== true) {
            clearInterval(timerId)
        }
        return () => clearInterval(timerId);
    });
    const time_2 = [hrs,mins,secs]
    return { time_2, startStopWatch, stopStopWatch, resetStopWatch };

}