import React from "react"
import { useReducer } from "react";
export const AppContext = React.createContext();
const initState = {
    count:0
}
export const constants={
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT",
}
const reducer = (state, action) => {
    switch (action.type) {
        case constants.INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case constants.DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            };
        }
        default: {
            return state;
            }
    }
}
export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return <AppContext.Provider value={[state,dispatch]}>{children}</AppContext.Provider>
}