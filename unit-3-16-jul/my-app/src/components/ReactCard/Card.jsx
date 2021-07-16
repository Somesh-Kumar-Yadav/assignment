import React from "react"
import styled from "styled-components"
const CreditCard = styled.div`
width: 508px;
position: relative;
height:314px;
margin-left:50px ;
background: #F6425B;
border-radius: 15px;
box-shadow: 0 15px 35px rgba(0,0,0,0.5);
`
const Company = styled.h1`
font-size: 32px;
font-style: italic;
color:#fff;
letter-spacing: 2px;
position: absolute;
right: 20px;
top:20px
`
const Chip = styled.div`
img{
    margin-top: 60px;
    margin-left: 30px;
    top: 2000px;
    height: 70px;
    width:80px
}
`
const CardNumber = styled.div`
display: flex;
position: absolute;
right:80px;
letter-spacing: 5px;
font-size: 32px;
color: #fff;
`
const Details = styled.div`
display: flex;
position: relative;
justify-content: space-between;
top:100px;
`
const CardHolder = styled.div`
display: flex;
flex-direction: column;
margin-left:20px;
color:#fff;
font-size: 1.2rem;
div:first-child{
    font-size: 0.7rem;
}
`
const Expiry = styled.div`
display: flex;
flex-direction: column;
color:#fff;
font-size: 1.2rem;
div:first-child{
    font-size: 0.7rem;
}
`
const CVC = styled.div`
display: flex;
flex-direction: column;
margin-right: 30px;
color:#fff;
font-size: 1.2rem;
div:first-child{
    font-size: 0.7rem;
}
`

export function Card({ details }) {
    console.log(details)
    return <div>
        <CreditCard>
            <Company>
                VISA
            </Company>
            <Chip>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Icons8_flat_sim_card_chip.svg/512px-Icons8_flat_sim_card_chip.svg.png" alt="card"></img>
            </Chip>
            <CardNumber>
               {details.cardNumber}
            </CardNumber>
            <Details>
            <CardHolder>
            <div>
            <p>Card Holder</p>
            </div>
                <div>
                    <p>{details.name}</p>
                </div>
                </CardHolder>
            <Expiry>
                <div>
                <p>Expiry</p>
                </div>
                <div>
                    <p>{details.expiryMonth} / { details.expiryYear}</p>
                </div>
                </Expiry>
            <CVC>
            <div>
                    <p>CVC</p>
                    </div>
                    <div>
                    <p>{details.cvc}</p>
                    </div>
                    </CVC>
                    </Details>
                    </CreditCard>
    </div>
}
