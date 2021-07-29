import React from "react"
import { Link } from "react-router-dom"

export function Products() {
    var products = [ { name : "SmartPhone", price: 30, id : 0 }, { name : "Watch", price : 20, id : 1 }, { name : "Shirt", price : 50, id : 2 }, { name : "Pants", price : 100, id : 3 } ]
    return <>
        <Link to="/">Home</Link>
        {products.map((e) => {
            return <div key={e.id}>
                <p><span>{e.name}</span> | <span>{e.price}</span> | <span><Link to={"/product/"+e.id }>more details</Link></span></p>
            </div>
        })}
    </>
}