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
			return {
				...state,
				isLoading: false,
				isError: false,
			};
		case ADD_TODOS_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case GET_TODOS_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case GET_TODOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				todos: [...payload],
			};
		case GET_TODOS_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case TOG_TODOS_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case TOG_TODOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
			};
		case TOG_TODOS_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case DEL_TODOS_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case DEL_TODOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
			};
		case DEL_TODOS_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};
