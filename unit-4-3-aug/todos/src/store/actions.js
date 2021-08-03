import {
	ADD_TODOS,
	DELETE_TODOS,
	EDIT_TODOS,
	TOGGLE_DISPLAY,
	TOGGLE_TODOS,
} from "./actionTypes.js";

export const addTodos = (num) => {
	return { type: ADD_TODOS, payload: num };
};
export const editTodos = (num) => {
	return { type: EDIT_TODOS, payload: num };
};
export const deleteTodos = (num) => {
	return { type: DELETE_TODOS, payload: num };
};
export const toggleTodos = (num) => {
	return { type: TOGGLE_TODOS, payload: num };
};
export const toggleDisplay = (num) => {
	return { type: TOGGLE_DISPLAY, payload: num };
};
