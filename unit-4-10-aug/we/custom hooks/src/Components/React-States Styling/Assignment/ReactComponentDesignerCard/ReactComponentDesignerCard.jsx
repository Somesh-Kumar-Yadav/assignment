import {Card} from "./Card"
function ReactComponentDesignerCard() {
    const obj = {
        name: "Somesh Kumar Yadav",
        location: "Valsad",
        description: "Full Stack Engineer",
        skills:["HTML","CSS","JavaScript","React","Python"]
    }
    return <>
        <Card obj={obj}/>
    </>
}
export {ReactComponentDesignerCard}