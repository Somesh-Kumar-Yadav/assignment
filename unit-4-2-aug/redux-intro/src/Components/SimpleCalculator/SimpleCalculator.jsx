import { store } from "./Store/store.js";
import { addCount, divideCount, multiplyCount } from "./Store/actions.js";
import React from "react";
import styled from "styled-components";
import { reduceCount } from "../CustomCalculator/Store/actions.js";

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
&>div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
&>div:nth-child(3){
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
}
&>div:nth-child(3)>div{
    margin: 10px;
}
&>div:nth-child(1){
    margin: 10px;
}
&>div:nth-child(1)>div{
    padding: 20px;
    font-size: 24px;
    border-radius: 10px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
}
&>div:nth-child(2){
    margin: 5px;
}
& button{
    padding: 5px;
    margin: 5px;
}
& input{
    height: 30px;
    outline: none;
}
`
export function SimpleCalculator() {
	const [value, setValue] = React.useState(false);
	const [number, setNumber] = React.useState(0);
	const handleAdd = (num) => {
		store.dispatch(addCount(num));
		setValue((prev) => {
			return !prev;
		});
	};
	const handleReduce = (num) => {
		store.dispatch(reduceCount(num));
		setValue((prev) => {
			return !prev;
		});
	};
	const handleMultiply = (num) => {
		store.dispatch(multiplyCount(num));
		setValue((prev) => {
			return !prev;
		});
	};
	const handleDivide = (num) => {
		store.dispatch(divideCount(num));
		setValue((prev) => {
			return !prev;
		});
	};
	return (
        <Section>
            <div>
                <div>{store.getState().count}</div>
            </div>
            <div>
                <div><button onClick={()=>{
                    handleAdd(1);
                    setNumber(0);
                }}>INCREMENT</button></div>
                <div><button onClick={()=>{
                    handleReduce(1);
                    setNumber(0);
                }}>DECREMENT</button></div>
            </div>
            <div>
                <div><input value={ number} onChange={(e) => {
                    setNumber(Number(e.target.value));
                }} type="number"></input></div>
                <div>
                    <div><button onClick={()=>{
                        handleAdd(number);
                        setNumber(0);
                    }}>ADD</button><button onClick={()=>{
                        handleMultiply(number);
                        setNumber(0);
                    }}>MULTIPLY</button></div>
                    <div><button onClick={()=>{
                        handleReduce(number);
                        setNumber(0);
                    }}>SUBTRACT</button><button onClick={()=>{
                        handleDivide(number);
                        setNumber(0);
                    }}>DIVIDE</button></div>
                </div>
            </div>
        </Section>
	);
}