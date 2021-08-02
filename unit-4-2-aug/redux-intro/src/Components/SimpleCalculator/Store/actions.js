import {
	ADD_COUNT,
	DIVIDE_COUNT,
	MULTIPLY_COUNT,
	REDUCE_COUNT,
} from "./actionTypes.js";

export const addCount = (num) => {
	return { type: ADD_COUNT, payload: num };
};
export const reduceCount = (num) => {
	return { type: REDUCE_COUNT, payload: num };
};
export const multiplyCount = (num) => {
	return { type: MULTIPLY_COUNT, payload: num };
};
export const divideCount = (num) => {
	if (num === 0) {
		alert("Not Possible");
		return { type: DIVIDE_COUNT, payload: 1 };
	}
	return { type: DIVIDE_COUNT, payload: num };
};
