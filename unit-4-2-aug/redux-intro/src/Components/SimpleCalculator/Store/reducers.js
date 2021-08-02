import {
	ADD_COUNT,
	REDUCE_COUNT,
	MULTIPLY_COUNT,
	DIVIDE_COUNT,
} from "./actionTypes.js";

const initState = {
	count: 0,
};
export const reducerFunction = (state = initState, action) => {
	switch (action.type) {
		case ADD_COUNT:
			return { ...state, count: state.count + action.payload };
		case DIVIDE_COUNT:
			return { ...state, count: state.count / action.payload };
		case MULTIPLY_COUNT:
			return { ...state, count: state.count * action.payload };
		case REDUCE_COUNT:
			return { ...state, count: state.count - action.payload };
		default:
			return state;
	}
};
