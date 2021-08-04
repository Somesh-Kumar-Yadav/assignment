import {
	ADD_TODOS_FAILURE,
	ADD_TODOS_REQUEST,
	ADD_TODOS_SUCCESS,
	GET_TODOS_FAILURE,
	GET_TODOS_REQUEST,
	GET_TODOS_SUCCESS,
} from "./actionTypes.js";

const initState = { todos: [], loading: false, err: false };

export const todosReducerFunction = (state = initState, action) => {
	switch (action.type) {
		case GET_TODOS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_TODOS_SUCCESS:
			return {
				...state,
				loading: false,
				todos: [...action.payload],
			};
		case GET_TODOS_FAILURE:
			return {
				...state,
				loading: false,
				err: true,
			};
		case ADD_TODOS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case ADD_TODOS_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case ADD_TODOS_FAILURE:
			return {
				...state,
				loading: false,
				err: true,
			};
		default:
			return state;
	}
};
