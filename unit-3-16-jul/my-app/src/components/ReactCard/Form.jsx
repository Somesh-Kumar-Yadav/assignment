import React from "react"
import styled from "styled-components"

const CardForm = styled.div`
width: 300px;
position: relative;
height:514px;
margin-top: 140px;
margin-left:100px ;
border-radius: 15px;
`
const Title = styled.div`
font-size: 24px;
color:#000;
position: relative;
`
const CardHolderName = styled.div`
margin-top: 30px;
p{
    font-size: 12px;
}
input{
    width: 84%;
    border: none;
    height: 30px;
    border-bottom: 2px solid #F6425B;
    outline: none;
    background: transparent;
}
`
const CardNumber = styled.div`
margin-top: 30px;
p{
    font-size: 12px;
}
input{
    width: 84%;
    border: none;
    height: 30px;
    border-bottom: 2px solid #F6425B;
    outline: none;
    background: transparent;
}
`
const CardOtherDetails = styled.div`
display: flex;
justify-content: space-between;
`
const ExpiryYear = styled.div`
width: 33%;
margin-top: 30px;
p{
    font-size: 12px;
}
input{
    width: 50%;
    border: none;
    height: 30px;
    border-bottom: 2px solid #F6425B;
    outline: none;
    background: transparent;
}
`
const ExpiryMonth = styled.div`
margin-top: 30px;
width: 33%;
p{
    font-size: 12px;
}
input{
    width: 50%;
    border: none;
    height: 30px;
    border-bottom: 2px solid #F6425B;
    outline: none;
    background: transparent;
}
`
const CVC = styled.div`
margin-top: 30px;
width: 33%;
p{
    font-size: 12px;
}
input{
    width: 50%;
    border: none;
    height: 30px;
    border-bottom: 2px solid #F6425B;
    outline: none;
    background: transparent;
}
`
const Pay = styled.button`
width: 150px;
border-radius: 15px;
height: 40px;
color: #fff;
font-size: 1.1rem;
background:#f6425b ;
border: none;
margin:40px 60px;
`
export function Form({ setDetails,details }) {
    const HandleChange = (e) => {
		const {name,value} = e.target;
		setDetails({ ...details, [name]: value });
        console.log(details)
    };
    return <div>
        <CardForm>
            <Title>Payment details</Title>
            <CardHolderName>
                <p>CARDHOLDER NAME</p>
                <input name="name" onChange={HandleChange} type="text"></input>
            </CardHolderName>
            <CardNumber>
                <p>CARD NUMBER</p>
                <input name="cardNumber" onChange={HandleChange} type="text"></input>
            </CardNumber>
            <CardOtherDetails>
                <ExpiryMonth>
                <p>EXPIRY MONTH</p>
                <input name="expiryMonth" onChange={HandleChange} type="text"></input>
            </ExpiryMonth>
                <ExpiryYear>
                <p>EXPIRY YEAR</p>
                <input name="expiryYear" onChange={HandleChange} type="text"></input>
            </ExpiryYear>
                <CVC>
                <p>CVC</p>
                <input name="cvc" onChange={HandleChange} type="text"></input>
            </CVC>
            </CardOtherDetails>
            <Pay>Pay</Pay>
        </CardForm>
    </div>
}