import React from "react"
import style from "./BlogPostList.module.css"
export function BlogPostList({ list }) {
    
    return <div>
        
        {
            list.map(e => {
                return <>
                    <div className={style.blog}>
                    <h1 className={style.title}>{e.title}</h1>
                    <p className={style.body}>{e.body}</p>
                    <p className={style.author}>Author : { e.author}</p>
                    <p className={style.private}>{ e.private?"Private":"Non-Private"}</p>
                    <p className={style.category}>Category : {e.category}</p>
                    <p className={style.files}>Image : {e.files }</p>
                </div>
                </>
            })
        }
    </div>
}