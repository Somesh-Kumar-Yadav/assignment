import React from "react"
import styles from "./Display.module.css"
export function Display({ query, setQuery, news, setNews }) {
    return <div className={styles.container}>
        {
            news.map((data) => {
                return <div className={styles.item}>

                    <h2>{data.title}</h2>
                    <h4>{data.description}</h4>
                    <p>{ data.content}</p>
                    -{data.author}

                </div>
            })
    }
    </div>
}