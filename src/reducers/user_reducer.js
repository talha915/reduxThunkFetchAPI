import {FETCH_USER} from "../actions/user_actions";

let initialState=[];

export default function (state=initialState, actions) {
    switch (actions.type) {
        case FETCH_USER:
            return [
                ...state,
                ...actions.payload
            ]
        default:
            return state;
    }
}