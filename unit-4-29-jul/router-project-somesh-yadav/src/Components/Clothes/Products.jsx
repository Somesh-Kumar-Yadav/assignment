import axios from "axios";
import React, { useEffect } from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"


const Card = styled.div`
width: 20vw;
height:25vw;
padding: 10px;
border: 1px solid black;
display: flex;
justify-content: center;
margin: 20px;
border-radius: 20px;
align-items: center;
flex-direction: column;
&>a{
   display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column; 
}
& img{
    width:60%;
    padding: 10px;
}
`
const Box = styled.div`
display: flex;
flex-wrap: wrap;
width: 100vw;
justify-content: space-evenly;
align-items: center;
`
export function Products() {
    const [product, setProducts] = React.useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            console.log(res.data);
             setProducts(res.data);
        })
    },[])
    return <Box>
        {
            product.map((i)=> {
                return <Card key={i.id}>
                    <Link to={"/clothes/" + i.id}>
                        
                        <img src={i.image} alt="" />
                        <h4>{ i.title}</h4>
                        <p>{ i.price} $</p>
                        
                    </Link>
                    </Card>
            })
    }
    </Box>
}