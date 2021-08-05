import {
	ADD_TODOS_FAILURE,
	ADD_TODOS_REQUEST,
	ADD_TODOS_SUCCESS,
	GET_TODOS_FAILURE,
	GET_TODOS_REQUEST,
	GET_TODOS_SUCCESS,
} from "./actionTypes.js";
import axios from "axios";

export const addTodosSuccess = (num) => {
	return { type: ADD_TODOS_SUCCESS, payload: num };
};
export const addTodosRequest = () => {
	return { type: ADD_TODOS_REQUEST };
};
export const addTodosFailure = (num) => {
	return { type: ADD_TODOS_FAILURE, payload: num };
};
export const getTodosRequest = () => {
	return { type: GET_TODOS_REQUEST };
};
export const getTodosSuccess = (num) => {
	return { type: GET_TODOS_SUCCESS, payload: num };
};
export const getTodosFailure = () => {
	return { type: GET_TODOS_FAILURE };
};
export const getTodos = () => (dispatch) => {
	dispatch(addTodosRequest());
	axios
		.get("http://localhost:3004/todos")
		.then((res) => {
			dispatch(getTodosSuccess(res.data));
			console.log(res.data);
		})
		.catch((err) => {
			dispatch(getTodosFailure(err.message));
		});
};
