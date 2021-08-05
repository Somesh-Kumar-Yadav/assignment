import {
	ADD_TODOS_FAILURE,
	ADD_TODOS_REQUEST,
	ADD_TODOS_SUCCESS,
	GET_TODOS_FAILURE,
	GET_TODOS_REQUEST,
	GET_TODOS_SUCCESS,
} from "./actionTypes.js";

const initState = {
	todos: [],
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
		case GET_TODOS_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case GET_TODOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				todos: [...payload],
			};
		case GET_TODOS_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		default:
			return state;
	}
};
