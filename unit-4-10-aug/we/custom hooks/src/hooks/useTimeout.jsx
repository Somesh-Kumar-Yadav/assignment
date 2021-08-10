import React from 'react'
import { useEffect } from 'react';
export default function useTimeout(delay) {
    const [ready, setReady] = React.useState(false);
    useEffect(() => {
        let timer = setTimeout(() => {
            setReady(true);
        }, delay);
        return () => {
            clearTimeout(timer);
        }
    }, [delay])
    
    return [ ready ];
}