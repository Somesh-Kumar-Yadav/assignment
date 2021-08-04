import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes.js";

export const authRequest = (num) => {
	return { type: AUTH_REQUEST, payload: num };
};
export const authSuccess = (num) => {
	return { type: AUTH_SUCCESS, payload: num };
};
export const authFailure = (num) => {
	return { type: AUTH_FAILURE, payload: num };
};
