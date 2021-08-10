import { ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS } from "./actionTypes.js";

export const addTodosSuccess = (num) => {
	return { type: ADD_TODOS_SUCCESS, payload: num };
};
export const addTodosRequest = () => {
	return { type: ADD_TODOS_REQUEST };
};
