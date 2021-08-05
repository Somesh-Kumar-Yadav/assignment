import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actionTypes";
import axios from "axios";

export const searchRequest = () => {
	return { type: SEARCH_REQUEST };
};
export const searchSuccess = (token) => {
	return { type: SEARCH_SUCCESS, payload: token };
};
export const searchFailure = (err) => {
	return { type: SEARCH_FAILURE, payload: err };
};

export const searchUser = (payload) => (dispatch) => {
	dispatch(searchRequest());
	const { username, page } = payload;
	axios
		.get("https://api.github.com/search/users", {
			params: {
				q: username,
				page: page,
				per_page: 5,
			},
		})
		.then((res) => {
			console.log(res.data.items);
			dispatch(searchSuccess(res.data.items));
		})
		.catch((err) => {
			dispatch(searchFailure(err.message));
			alert(err.message);
		});
};
