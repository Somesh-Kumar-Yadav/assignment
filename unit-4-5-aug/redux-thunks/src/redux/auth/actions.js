import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios";

export const loginRequest = () => {
	return { type: LOGIN_REQUEST };
};
export const loginSuccess = (token) => {
	return { type: LOGIN_SUCCESS, payload: token };
};
export const loginFailure = (err) => {
	return { type: LOGIN_FAILURE, payload: err };
};
export const loginUser = (payload) => (dispatch) => {
	dispatch(loginRequest());
	const { username, password } = payload;
	axios
		.post("https://reqres.in/api/login", {
			email: username,
			password: password,
		})
		.then((res) => {
			console.log(res.data.token);
			dispatch(loginSuccess(res.data.token));
		})
		.catch((err) => {
			dispatch(loginFailure(err.message));
		});
};
