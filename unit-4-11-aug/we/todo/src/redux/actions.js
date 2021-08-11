import axios from "axios";
import { useState } from "react";
import {
	ADD_TODOS_FAILURE,
	ADD_TODOS_REQUEST,
	ADD_TODOS_SUCCESS,
	DEL_TODOS_FAILURE,
	DEL_TODOS_REQUEST,
	DEL_TODOS_SUCCESS,
	GET_TODOS_FAILURE,
	GET_TODOS_REQUEST,
	GET_TODOS_SUCCESS,
	TOG_TODOS_FAILURE,
	TOG_TODOS_REQUEST,
	TOG_TODOS_SUCCESS,
} from "./actionTypes.js";

const addTodosSuccess = () => {
	return { type: ADD_TODOS_SUCCESS };
};
const addTodosRequest = () => {
	return { type: ADD_TODOS_REQUEST };
};
const addTodosFailure = () => {
	return { type: ADD_TODOS_FAILURE };
};
const getTodosSuccess = (num) => {
	return { type: GET_TODOS_SUCCESS, payload: num };
};
const getTodosRequest = () => {
	return { type: GET_TODOS_REQUEST };
};
const getTodosFailure = () => {
	return { type: GET_TODOS_FAILURE };
};

const delTodosSuccess = () => {
	return { type: DEL_TODOS_SUCCESS };
};
const delTodosRequest = () => {
	return { type: DEL_TODOS_REQUEST };
};
const delTodosFailure = () => {
	return { type: DEL_TODOS_FAILURE };
};
const togTodosSuccess = (num) => {
	return { type: TOG_TODOS_SUCCESS, payload: num };
};
const togTodosRequest = () => {
	return { type: TOG_TODOS_REQUEST };
};
const togTodosFailure = () => {
	return { type: TOG_TODOS_FAILURE };
};

export const addTodo = (payload) => (dispatch) => {
	dispatch(addTodosRequest());
	console.log(payload);
	axios
		.post("http://localhost:3004/todos", payload)
		.then((res) => {
			console.log(res.data);
			dispatch(addTodosSuccess());
		})
		.catch((e) => {
			dispatch(addTodosFailure());
		});
};
export const getTodo = () => (dispatch) => {
	dispatch(getTodosRequest());
	axios
		.get("http://localhost:3004/todos")
		.then((res) => {
			console.log(res.data);
			dispatch(getTodosSuccess(res.data));
		})
		.catch((e) => {
			dispatch(getTodosFailure());
		});
};
export const delTodo = (payload) => (dispatch) => {
	dispatch(delTodosRequest());
	console.log(payload);
	axios
		.delete("http://localhost:3004/todos/" + payload)
		.then((res) => {
			dispatch(delTodosSuccess());
		})
		.catch((e) => {
			dispatch(delTodosFailure());
		});
};
export const togTodo = (payload) => (dispatch) => {
	// console.log(payload);
	const { id, status } = payload;
	// console.log(status);
	axios
		.patch("http://localhost:3004/todos/" + id, {
			status: status,
		})
		.then((res) => {
			//console.log(res.data);
			dispatch(togTodosSuccess());
		})
		.catch((e) => {
			dispatch(togTodosFailure());
		});
};
