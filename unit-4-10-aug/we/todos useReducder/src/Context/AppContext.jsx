import React from "react"
import { useReducer } from "react";
export const AppContext = React.createContext();
const initState = {
    loading: true,
    error: false,
    todos:[]
}
export const constants={
    GET_TODOS_REQUEST:"GET_TODOS_REQUEST",
    GET_TODOS_SUCCESS:"GET_TODOS_SUCCESS",
    GET_TODOS_FAILURE:"GET_TODOS_FAILURE",
    POST_TODOS_REQUEST:"POST_TODOS_REQUEST",
    POST_TODOS_SUCCESS:"POST_TODOS_SUCCESS",
    POST_TODOS_FAILURE:"POST_TODOS_FAILURE",
}
const reducer = (state, action) => {
    //console.log(action)
    switch (action.type) {
        case constants.GET_TODOS_REQUEST: {
            return {
                ...state,
                loading: true,
               error:false
            };
        }
        case constants.GET_TODOS_SUCCESS: {
            //console.log(state.todos,action.payload)
            return {
                ...state,
                loading: false,
                error: false,
               todos:[...action.payload]
            };
        }
        case constants.GET_TODOS_FAILURE: {
            return {
                ...state,
                loading: false,
               error:true
            };
        }
        case constants.POST_TODOS_REQUEST: {
            return {
                ...state,
                loading: true,
               error:false
            };
        }
        case constants.POST_TODOS_SUCCESS: {
            return {
                ...state,
                loading: false,
               error:false
            };
        }
        case constants.POST_TODOS_FAILURE: {
            return {
                ...state,
                loading: false,
               error:true
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