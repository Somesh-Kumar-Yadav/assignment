import React from "react"
import { Form } from "./Form"
import {Card} from "./Card"

export function ReactCard() {
    const data = {
        name: "John Smith",
        cardNumber: "4256789056784532",
        expiryMonth: "09",
        expiryYear: "2020",
        cvc:"245"
    }
    const [details, setDetails] = React.useState(data);
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Card details={details }/>
        <Form details={details } setDetails={ setDetails}/>
    </div>
}