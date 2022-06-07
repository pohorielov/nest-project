import {FETCHED_USER} from "./types";

const initialState = {
    user: [],
    fetchedUser: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_USER:
            return { ...state, fetchedUser: action.payload }
        default: return state
    }
}