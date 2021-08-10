import  { useState } from 'react'
import { useEffect } from 'react';
export default function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(url).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);
            setData(res);
            setLoading(false);
        }).catch((e) => {
            setError(true);
            setLoading(false);
})
    },[url])
    
    return {loading,error,data};
}