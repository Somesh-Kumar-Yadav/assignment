import React from "react"
import Question from "./Questions";

export default function Slider({questions,length}) {
    const [page, setPage] = React.useState(0);

    return (
        <div data-testid="container" >
            <Question object={questions[page]} />
			<button disabled={page === 0} data-testid="prev" onClick={() => setPage(page - 1)}>Prev</button>
			<p data-testid="page">{ page+1}</p>
            <button disabled={page===length-1} data-testid="next" onClick={()=>setPage(page+1)}>Next</button>
        </div>
    )
}