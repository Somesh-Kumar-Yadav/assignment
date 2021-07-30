import React from "react"
import styled from "styled-components";
const CategorySection = styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 3rem;
border-bottom: 1px solid #222222;
&>ul{
     font-family: Brush Script MT, Brush Script Std, cursive;
    display: flex;
    width: 30%;
    font-size: 1.4rem;
    justify-content: space-between;
    align-items: center;
}
&>ul>li:hover{
font-size: 1.2rem;
    font-family: Arvo;
    margin-top: 7px;
    padding: 5px;
    border-bottom:1px solid #FF3D00;
    cursor: pointer;
}
`
export function ClothesCategory() {
    return <>
        <CategorySection>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Unisex</li>
            </ul>
</CategorySection>
        

    </>
}