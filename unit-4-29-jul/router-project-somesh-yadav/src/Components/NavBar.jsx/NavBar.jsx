import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
display: flex;
border-bottom: 1px solid #222222;
justify-content: space-between;
align-items: center;
height: 4em;
width: 100vw;
text-decoration: none;
&>div:nth-child(1)>li{
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-size: 2em;
    margin: 0 10px;
    color: #222222;
    cursor: pointer;
    list-style: none;
}
&>div:nth-child(2){
    list-style: none;
    display: flex;
    list-style: none;
    justify-content: space-between;  
}
&>div:nth-child(2)>li{
    font-size: 1.5em;
    margin: 0 10px;
    color: #222222;
    font-family: Brush Script MT, Brush Script Std, cursive;
    padding: 15px;
}
&>div:nth-child(2)>li>a{
    color: #222222;
    text-decoration: none;
}
&>div:nth-child(2)>li:hover{
    font-size: 1.2em;
    font-family: Arvo;
    border-radius: 30px;
    margin-top: 7px;
    background-color: #FF3D00;
    cursor: pointer;
}
&>div:nth-child(3)>li{
    list-style: none;
    cursor: pointer;

}
&>div:nth-child(3)>li>img{
    margin: 0 20px;
}
`
export function NavBar() {
    return <>
        <Nav>
            <div>
                <li>My E-Commerce App</li>
            </div>
            <div>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/clothes">Clothes</Link></li>
                <li><Link to="/electronics">Electronics</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </div>
            <div>
                <li><img style={{ height: "32px",width:"32px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ic_shopping_cart_48px.svg/1024px-Ic_shopping_cart_48px.svg.png" alt=""></img></li>
            </div>
       </Nav>
    </>
}