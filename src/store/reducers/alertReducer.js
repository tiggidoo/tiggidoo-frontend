import { SET_ALERT, REMOVE_ALERT, RESET_ALERT } from '../actions/typesAction';

const initialState = [];

export default function alertReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            if(state.length === 0){
                return [...state, payload];
            }
            return state;
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        case RESET_ALERT:
            return initialState;
        default:
            return state;
    }
}