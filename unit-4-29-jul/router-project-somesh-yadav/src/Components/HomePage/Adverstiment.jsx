import React from "react"
import styled from "styled-components"

const Section = styled.section`
display: flex;
margin-top: 20px;
justify-content: center;
align-items: center;
&>div>img{
    width: 70vw;
}
`
export function Adverstiment() {
    return <>
        <Section>
            <div>
                <img src="https://propellerads.com/blog/wp-content/uploads/2020/05/Propellerads-eCommerce-landing-pages-790x395.png" alt=""></img>
            </div>
        </Section>
    </>
}