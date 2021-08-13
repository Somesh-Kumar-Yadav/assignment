import styled from "styled-components"
export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 70vw;
height: 30vh;
border:1px solid black;
margin: 20px;
border-radius: 20px;
&>input{
    margin: 10px;
    margin-top: 20px;
    padding: 5px;
    width: 40vw;
    height: 40px;
    outline: none;
    border-radius: 9px;
}
&>textarea{
    outline: none;
    border-radius: 9px;
    margin: 10px;
    padding: 5px;
    width: 40vw;
    height: 100px;
}
&>button{
     border-radius: 5px;
    background:#5566c3 ;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
	color: #fff;
	font-weight: 400;
	font-family: "PT Sans", sans-serif;
	border: 0 none;
    margin: 10px;
    cursor: pointer;
	font-size: 16px;
	padding: 0rem 1.5rem;
    height: 30px;
    
}
`
export const Card = styled.div`
width: 90vw;
border-radius:20px;
margin: 10px;
margin-bottom: 30px;
box-shadow: 0 px 0px 5px 1px #cecece;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100px;
background: ${props => props.color?props.color:"black" } ;
&>div{
    display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
&>div>h4{
  color:#cecece;
  font-size: 24px;
}
&>div>p{
    color:#fff
}
`
export const Button = styled.button`
    border-radius: 5px;
    background: ${props => props.color?"#5566c3;":"#f7a400" } ;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
	color: #fff;
	font-weight: 400;
	font-family: "PT Sans", sans-serif;
	border: 0 none;
    cursor: pointer;
    margin: 10px;
	font-size: 16px;
	padding: 0rem 1.5rem;
    height: 30px;
`