import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const getRequest = () => {
	return { type: GET_DATA_REQUEST };
};
export const getSuccess = (students) => {
	return { type: GET_DATA_SUCCESS, payload: students };
};
export const getFailure = () => {
	return { type: GET_DATA_FAILURE };
};
export const getData = (payload) => (dispatch) => {
	console.log(payload);
	try {
		dispatch(getRequest());
		axios
			.get(
				`http://localhost:2345/students?page=${payload.page}&age=${payload.age}&gender=${payload.gender}&city=${payload.city}&sort=${payload.sort}`
			)
			.then((res) => {
				dispatch(getSuccess(res.data));
			});
	} catch (e) {
		dispatch(getFailure());
	}
};
