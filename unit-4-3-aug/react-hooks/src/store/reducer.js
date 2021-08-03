import { INC_COUNTER, DEC_COUNTER, ADD_TODO, TOGGLE_TODO } from "./actionTypes";

const initState = {
	counter: 0,
	isLoading: false,
	isError: false,
	isDisabled: true,
	todo: [],
};

export const reducer = (state = initState, action) => {
	switch (action.type) {
		case INC_COUNTER:
			return {
				...state,
				counter: (state.counter += 1),
				isDisabled: false,
			};
		case ADD_TODO:
			return {
				...state,
				todo: [...state.todo, action.payload],
			};
		case TOGGLE_TODO:
			state.todo.map((e) => {
				if (e.id === action.payload) {
					e.status = !e.status;
				}
				return e;
			});
			return {
				...state,
				todo: [...state.todo],
			};

		case DEC_COUNTER:
			if (state.counter <= 1) {
				return {
					...state,
					counter: 0,
					isDisabled: true,
				};
			} else {
				return {
					...state,
					counter: (state.counter -= 1),
				};
			}

		default: {
			return state;
		}
	}
};
