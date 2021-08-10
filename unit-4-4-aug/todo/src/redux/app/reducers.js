import { loadData, saveData } from "../../utilis/localStorage.js";
import {
	ADD_TODOS_FAILURE,
	ADD_TODOS_REQUEST,
	ADD_TODOS_SUCCESS,
} from "./actionTypes.js";

const initState = {
	todos: loadData("todos") || [],
	isLoading: false,
	isError: false,
};

export const todosReducerFunction = (state = initState, { type, payload }) => {
	switch (type) {
		case ADD_TODOS_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case ADD_TODOS_SUCCESS:
			const updatedTodo = [...state.todos, payload];
			saveData("todos", updatedTodo);
			return {
				...state,
				isLoading: false,
				isError: false,
				todos: updatedTodo,
			};
		case ADD_TODOS_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};
