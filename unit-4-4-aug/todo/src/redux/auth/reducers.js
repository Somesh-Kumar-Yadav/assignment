import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";
import { loadData, saveData } from "../../utilis/localStorage";
const token = loadData("token");
console.log(token);
const initState = { isAuth: token ? true : false, token: token || "" };
export const authReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case LOGIN_SUCCESS:
			saveData("token", payload);
			return {
				...state,
				isAuth: true,
				token: payload,
			};

		case LOGIN_FAILURE:
			return {
				...state,
				isAuth: false,
				token: "",
			};

		default:
			return state;
	}
};
