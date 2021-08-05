import React from 'react'
import { useParams } from 'react-router'

export function ProfileDetails() {
    const {name} = useParams();
    console.log(name);
    return <>
        <h1>Profile Page</h1>
        <p>Hii { name}</p>
    </>
}