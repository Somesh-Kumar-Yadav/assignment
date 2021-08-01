import React from "react"
import styled from "styled-components"
import { ThemeContext } from "../../context/ThemeContext"
const Section = styled.section`
height:70vh;
width:35vw;
position: absolute;
box-shadow: 0 0 4px 0.5px #222222;
top:8vw;
left:10vw;
border-radius: 5px;
color:${props => props.color ==="light"?"#2d2d2d" : "#fff"};
&>div:nth-child(1){
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
&>div:nth-child(2){
    height: 85%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    flex-direction: column;
}
&>div:nth-child(2)>div>div{
    display: flex;

}
&>div:nth-child(2)>div>div>div{
    width: 4vw;
    height: 4vw;
    overflow: hidden;
    margin-left: 20px;
}
&>div:nth-child(2)>div>div:nth-child(2){
    margin-top: 20px;
    
}
&>div:nth-child(2)>div>div:nth-child(2)>progress{
    width: 90%;
    height: 20px;
    color: green;
    margin-left: 5%;
    padding-bottom: 30px;
}
&>div:nth-child(2)>div>div>div:nth-child(2){
    width: 10vw;
    height: 100%;
    overflow: hidden;
    margin-left: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
}
&>div:nth-child(2)>div>div>div:nth-child(2)>h4{
    margin: 2px;
    margin-top: 6px;
}
&>div:nth-child(2)>div>div>div>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
&>div:nth-child(1)>p{
    margin-right: 20px;
    font-size: 16px;
    font-weight: 500;
}
&>div:nth-child(1)>h1{
    font-size: 24px;
    font-weight: 700;
    margin-left: 20px;
}
`
export function Card() {
    const value = React.useContext(ThemeContext);
    return <Section color={value.theme}>
        <div>
            <h1>Active Users</h1>    
            <p>for August</p>    
        </div>
        <div>
            <div>
                <div>
                    <div><img src="https://pbs.twimg.com/profile_images/1378999055154511879/XmphRvoz_400x400.jpg" alt=""></img></div>
                    <div>
                        <h4>Somesh Kumar Yadav</h4>
                        <p>Valsad ,Gujarat</p>
                </div>
                </div>
                <div>

                    <progress id="file" value="56" max="100">  </progress>
                </div>
            </div>
            <div>
                <div>
                    <div><img src="https://pbs.twimg.com/profile_images/1378999055154511879/XmphRvoz_400x400.jpg" alt=""></img></div>
                    <div>
                        <h4>Somesh Kumar Yadav</h4>
                        <p>Valsad ,Gujarat</p>
                </div>
                </div>
                <div>

                    <progress id="file" value="72" max="100">  </progress>
                </div>
            </div>
            <div>
                <div>
                    <div><img src="https://pbs.twimg.com/profile_images/1378999055154511879/XmphRvoz_400x400.jpg" alt=""></img></div>
                    <div>
                        <h4>Somesh Kumar Yadav</h4>
                        <p>Valsad ,Gujarat</p>
                </div>
                </div>
                <div>

                    <progress id="file" value="90" max="100">  </progress>
                </div>
            </div>
            
        </div>
    </Section>
}