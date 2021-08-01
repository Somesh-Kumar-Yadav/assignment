import React from "react"
import styled from "styled-components"
import { ThemeContext } from "../../context/ThemeContext"
const Section = styled.section`
height:10vh;
width:93vw;
position: absolute;
top:0;
left:7vw;
display: flex;
justify-content: space-between;
align-items: center;
&>div{
    display: flex;
justify-content: space-between;
align-items: center;
    width:35vw;
    height: 100%;
    position: absolute;
    top:0;
    left:3vw;
}
&>div>div>p{
   font-size: 18px;
   font-weight: 500;
   color:${props => props.color ==="light"?"#2d2d2d" : "#fff"};
   margin: 10px;
}
&>div>div>h1{
   font-size: 30px;
   color:${props => props.color ==="light"?"#2d2d2d" : "#fff"};
}
&>div>div{
    display: flex;
justify-content: space-between;
align-items: center;
}
`
const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  &>input{
      opacity: 0;
     width: 0;
    height: 0;
  }
  &>span{
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  }
  &>span:before{
    position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
  }
  &>input:checked + span {
  background-color: #2d2d2d;
}
input:focus + span {
  box-shadow: 0 0 1px #2d2d2d;
}
input:checked + span:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
`
export function Navbar() {
  const value = React.useContext(ThemeContext);
  const Change = (e) => {
        if (e.target.checked) {
            value.setTheme("dark");
        } else {
            value.setTheme("light");
        }
  }
  console.log(value)
    return <Section color={value.theme}>
        <div>
            <div><h1>My Dashboard</h1></div>
            <div>
                <p>Dark Mode</p>
                <Label>
                <input onClick={Change} type="checkbox"/>
                <span></span>
            </Label>
            </div>
        </div>
    </Section>
}