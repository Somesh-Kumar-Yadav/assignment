import  { useState } from 'react'
import { useEffect } from 'react';
export default function usePost(url,payload) {
    const [isloading, setLoading] = useState(true);
    const [iserror, setError] = useState(false);
    const [isdata, setData] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch.post(url,payload).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);
            setData(res);
            setLoading(false);
        }).catch((e) => {
            setError(true);
            setLoading(false);
})
    },[url,payload])
    
    return {isloading,iserror,isdata};
}