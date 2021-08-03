import {
	ADD_TODO,
	DEC_COUNTER,
	INC_COUNTER,
	TOGGLE_TODO,
} from "./actionTypes.js";

export const incCounter = (num) => {
	return { type: INC_COUNTER, payload: num };
};
export const decCounter = (num) => {
	return { type: DEC_COUNTER, payload: num };
};
export const addTodo = (num) => {
	return { type: ADD_TODO, payload: num };
};
export const toggleTodo = (num) => {
	return { type: TOGGLE_TODO, payload: num };
};
