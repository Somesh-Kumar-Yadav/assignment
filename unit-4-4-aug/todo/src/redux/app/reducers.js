import { loadData, saveData } from "../../utilis/localStorage.js";
import { ADD_TODOS } from "./actionTypes.js";

const initState = {
	todos: loadData("todos") || [],
};

export const todosReducerFunction = (state = initState, { type, payload }) => {
	switch (type) {
		case ADD_TODOS:
			const updatedTodo = [...state.todos, payload];
			saveData("todos", updatedTodo);

			return {
				...state,
				todos: updatedTodo,
			};
		default:
			return state;
	}
};
