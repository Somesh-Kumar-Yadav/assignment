import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actionTypes";
const initState = {
	user: [],
	isError: false,
	isLoading: false,
};
export const userReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case SEARCH_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case SEARCH_SUCCESS:
			return {
				...state,
				user: [...payload],
				isLoading: false,
			};

		case SEARCH_FAILURE:
			return {
				...state,
				isError: true,
				isLoading: false,
			};
		default:
			return state;
	}
};
