import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes.js";

const initState = { token: "", loading: false, err: false };
export const authReducerFunction = (state = initState, action) => {
	switch (action.type) {
		case AUTH_REQUEST:
			return {
				...state,
				loading: true,
			};

		case AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				token: action.payload,
			};

		case AUTH_FAILURE:
			return {
				...state,
				loading: false,
				err: true,
			};

		default:
			return state;
	}
};
