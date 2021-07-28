import React from "react"
import styled from "styled-components"
import { ThemeContext } from "../../context/ThemeContext"
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
const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: flex-end;
height: 60px;
background:${props => props.color ==="dark"?"#535252" : "#ccc"}; 
box-shadow: 0px 0px 4px 0.5px #2d2d2d;
& p{
    
    margin: 10px;
    font-size: 20px;
    font-weight: 500;
    color:${props => props.color ==="light"?"#2d2d2d" : "#ccc"};
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
    return <React.Fragment>
        <Nav color={value.theme}>
                <p>Change Theme</p>
            <Label>
                <input onClick={Change} type="checkbox"/>
                <span></span>
            </Label>
        </Nav>
    </React.Fragment>
}