import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { todosReducerFunction } from "./app/reducers.js";
import { authReducerFunction } from "./auth/reducers.js";

const reducers = {
	auth: authReducerFunction,
	todos: todosReducerFunction,
};
const reducerFunction = combineReducers(reducers);
const logger1 = (state) => (next) => (actions) => {
	console.log("Logger 1");
	const retValue = next(actions);
	console.log("Logger1 done");
	return retValue;
};
const logger2 = (state) => (next) => (actions) => {
	console.log("Logger 2");
	const retValue = next(actions);
	console.log("Logger2 done");
	return retValue;
};
export const store = createStore(
	reducerFunction,
	compose
	applyMiddleware(logger1, logger2)
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
