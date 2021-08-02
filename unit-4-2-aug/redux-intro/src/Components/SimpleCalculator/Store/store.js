import { createStore } from "redux";
import { reducerFunction } from "./reducers.js";

export const store = createStore(reducerFunction);
