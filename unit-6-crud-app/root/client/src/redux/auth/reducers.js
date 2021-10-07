import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
} from "./actionTypes";

const initState = {
	data: [],
	pages: 0,
	isLoading: false,
	isError: false,
};
export const authReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_DATA_REQUEST:
			return {
				...state,
				isError: false,
			};
		case GET_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: [...payload.data],
				pages: payload.pages,
			};
		case GET_DATA_FAILURE:
			return {
				...state,
				isError: true,
				isLoading: false,
			};
		default:
			return state;
	}
};
