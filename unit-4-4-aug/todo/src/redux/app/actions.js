import { ADD_TODOS } from "./actionTypes.js";

export const addTodos = (num) => {
	return { type: ADD_TODOS, payload: num };
};
