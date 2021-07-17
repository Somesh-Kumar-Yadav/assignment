import React from "react"
import { Display } from "./Display"
import { Input } from "./Input"
import axios from "axios";
export function Main() {
    const [query,setQuery]=React.useState("top-news")
    const [news, setNews] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(false);
    
    const getNews = () => {
        setIsLoading(true);
        try {
            axios.get("https://newsapi.org/v2/everything", {
                params: {
                    "q":query,
                    "apiKey": "8c922065aed74cf4b990f32efe4f8f5e",
                    "page": page,
                    "pageSize":"20"
                }
            }).then(({data}) => {
                console.log(data.articles);
                setNews([...data.articles])
            })
        }
        catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }
    React.useEffect(() => {
        getNews();
    }, [page])
    if (isLoading) {
        return<div>Loading...</div>
    }
    return <div>
        <Input news={news} setNews={setNews} query={query} setQuery={setQuery} getNews={ getNews}/>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button onClick={() => {
            setPage(page-1)
        }}>Prev</button>
        <button>{ page}</button>
        <button onClick={() => {
            setPage(page+1)
        }}>Next</button>
        </div>
        <Display news={news} setNews={setNews} query={query} setQuery={setQuery} />
    </div>
}