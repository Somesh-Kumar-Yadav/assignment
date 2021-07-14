import React from "react"
export function Useref() {
    const ref = React.useRef()
    const Handle = () => {
       ref.current.focus()
    }
    return <>
        <input type="text" ref={ref}/>
    <button onClick={Handle}>To input box</button>
    </>
}