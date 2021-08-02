import { ADD_COUNT, RESET_COUNT, REDUCE_COUNT } from "./actionTypes.js";

const initState = {
	count: 0,
};
export const reducerFunction = (state = initState, action) => {
	switch (action.type) {
		case ADD_COUNT:
			return { ...state, count: state.count + action.payload };
		case RESET_COUNT:
			return { ...state, count: initState.count };
		case REDUCE_COUNT:
			return { ...state, count: state.count - action.payload };
		default:
			return state;
	}
};
