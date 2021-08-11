import { applyMiddleware, compose, createStore } from "redux";
import { todosReducerFunction } from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
	todosReducerFunction,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
