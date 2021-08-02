import { ADD_COUNT, RESET_COUNT, REDUCE_COUNT } from "./actionTypes.js";

export const addCount = (num) => {
	return { type: ADD_COUNT, payload: num };
};
export const reduceCount = (num) => {
	return { type: REDUCE_COUNT, payload: num };
};
export const resetCount = () => {
	return { type: RESET_COUNT };
};
