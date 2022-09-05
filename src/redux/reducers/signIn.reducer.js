import { findAllByTestId } from "@testing-library/react";

const defaultState = {
    isLoggedIn:false
};

export const signInReducer = (state = defaultState, action ) => {
    switch (action.type){
        case 'LOG_IN_SUCCESS':
            return{
                ...state,
                isLoggedIn:true
            }
        case 'USER_LOGOUT':
            return{
                ...state,
                isLoggedIn:false
            }
        default:
            return state;
    }
};

