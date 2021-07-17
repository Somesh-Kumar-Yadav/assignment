import React from "react"

export function Input({ query, setQuery, news, setNews,getNews }) {
    const changeNews = () => {
        console.log("ji")
        console.log(query)
        getNews();
    }
    return <div style={{display:"flex",justifyContent:"center"}}>
        <input value={query} placeholder="Search News" onChange={(e) => {
            setQuery(e.target.value);
        }}></input>
        <button onClick={() => {
            changeNews();
        }}>Search</button>
    </div>
}