import React from "react"
import { useParams ,Link} from "react-router-dom";


export function ProductDetails() {
    var products = [ { name : "SmartPhone", price: 30, id : 0 }, { name : "Watch", price : 20, id : 1 }, { name : "Shirt", price : 50, id : 2 }, { name : "Pants", price : 100, id : 3 } ]
    const { id } = useParams();
    return <>
        <p>
        <Link to="/">Home</Link>
        </p>
        <Link to="/product">View all Products</Link>
        {id<0||id>3?<h1>Product not exist</h1>:
            <div>
            <h2>Product : {products[id].name}</h2>
            <h3>Price : {products[id].price}</h3>
            <h4>Product Id : {products[id].id}</h4>
        </div>
        }
    </>
}