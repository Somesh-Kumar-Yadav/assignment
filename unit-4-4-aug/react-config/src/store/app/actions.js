import {
	ADD_TODOS_FAILURE,
	ADD_TODOS_REQUEST,
	ADD_TODOS_SUCCESS,
	GET_TODOS_FAILURE,
	GET_TODOS_REQUEST,
	GET_TODOS_SUCCESS,
} from "./actionTypes.js";

export const getTodosRequest = (num) => {
	return { type: GET_TODOS_REQUEST, payload: num };
};
export const getTodosSuccess = (num) => {
	return { type: GET_TODOS_SUCCESS, payload: num };
};
export const getTodosFailure = (num) => {
	return { type: GET_TODOS_FAILURE, payload: num };
};
export const addTodosRequest = (num) => {
	return { type: ADD_TODOS_REQUEST, payload: num };
};
export const addTodosSuccess = (num) => {
	return { type: ADD_TODOS_SUCCESS, payload: num };
};
export const addTodosFailure = (num) => {
	return { type: ADD_TODOS_FAILURE, payload: num };
};
