import { useParams } from "react-router-dom";
import React from "react"
import axios from "axios";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../NavBar/NavBar";
import styled from "styled-components"

const Card = styled.div`
display: flex;
&>div{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 70px;
	margin-right:30px ;
	margin-left: 30px;
}
&>div:nth-child(1)>img{
	width: 30vw;
	height: 30vw;
	padding: 3vw;
}
&>div:nth-child(1)>h3{
	padding: 1vw;
}
&>div:nth-child(1)>p{
	padding: 0.5vw;
}
&>div:nth-child(1)>button{
	padding: 5px;
	margin: 10px;
	width: 100px;
	height: 40px;
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 150ms ease-in-out;
}

  &>div:nth-child(1)>button:hover {
	cursor: pointer;
  }


`

export const Details = () => {
	const { id } = useParams();
	const [product, setProduct] = React.useState([]);
	React.useEffect(() => {
		axios.get("https://fakestoreapi.com/products/" + id).then((res) => {
			console.log(res.data);
			setProduct(res.data)
		});
	}, []);
	return (
		<>
			<NavBar/>
			<Card>
				<div>
				<img src={product.image} alt =""/>
					<h3>{ product.title}</h3>
					<h5>$ {product.price}</h5>
					<button>Add to Cart</button>
				</div>
				<div>
					<h3>Category : { product.category}</h3>
					<p><strong>Description : </strong><br></br> { product.description}</p>
				</div>
			</Card>
			<Footer/>
		</>
	);
};