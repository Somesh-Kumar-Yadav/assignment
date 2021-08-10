
import { useEffect,  useState } from "react"

export default function useTimer(initTime) {
    const { hours, minutes, seconds } = initTime;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    const [start, setStart] = useState(false);
    

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
    const resetTimer = () => {
        setTime([Number(hours), Number(minutes), Number(seconds)]);
        setStart(false)
    }
    const startTimer = () => {
        setStart(true);
    }
    const stopTimer = () => {
        setStart(false);
    }
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        if (start !== true) {
        clearInterval(timerId)    
        }
        return () => clearInterval(timerId);
    });
    const time = [hrs,mins,secs]
    return{time,startTimer,stopTimer,resetTimer}
}