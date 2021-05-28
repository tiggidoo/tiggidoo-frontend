import { UPDATE_SCHEDULE_PRO, UPDATE_MY_CRITERIA } from '../actions/typesAction';

const initState = {
    isLoggedIn: false,
    pro: '',
    access_token: '',
    authError: null,
    loading: false
};

/* This is an error function */
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
                pro: action.payload.pro,
                access_token: action.payload.access_token
            };
        case 'LOG_OUT':
            localStorage.clear();
            return {
                initState
             };
        case UPDATE_SCHEDULE_PRO:
             return {
                 ...state,
                 pro: {
                     ...state.pro, 
                     availability: action.payload
                }
             };
        case UPDATE_MY_CRITERIA: 
             return {
                 ...state,
                 pro: action.payload
             };
        default:
            return state;
    }
}

export default authReducer;