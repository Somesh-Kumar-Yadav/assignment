import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { todosReducerFunction } from "./app/reducers.js";
import { authReducer } from "./auth/reducers.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	app: todosReducerFunction,
	auth: authReducer,
});
// export const store = createStore(
// 	rootReducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// const logger1 = (state) => (next) => (actions) => {
// 	console.log("Logger 1");
// 	const retValue = next(actions);
// 	console.log("Logger1 done");
// 	return retValue;
// };
// const logger2 = (state) => (next) => (actions) => {
// 	console.log("Logger 2");
// 	const retValue = next(actions);
// 	console.log("Logger2 done");
// 	return retValue;
// };
const customMiddleware = (store) => (next) => (action) => {
	// console.log(store);
	// console.log(next);
	// console.log(action);
	return typeof action === "function"
		? action(store.dispatch, store.getState)
		: next(action);
};
export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
