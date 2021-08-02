import {
	ADD_TODOS,
	DELETE_TODOS,
	TOGGLE_TODOS,
	TOGGLE_DISPLAY,
} from "./actionTypes.js";

const initState = [];
export const reducerFunction = (state = initState, action) => {
	switch (action.type) {
		case ADD_TODOS:
			return [...state, action.payload];
		case DELETE_TODOS:
			state = state.filter((e) => {
				return e.id !== action.payload;
			});
			return [...state];
		case TOGGLE_TODOS:
			state.map((e) => {
				if (e.id === action.payload) {
					e.status = !e.status;
				}
				return e;
			});
			return [...state];
		case TOGGLE_DISPLAY:
			state.map((e) => {
				if (e.id === action.payload) {
					e.display = !e.display;
				}
				return e;
			});
			return [...state];
		default:
			return state;
	}
};
