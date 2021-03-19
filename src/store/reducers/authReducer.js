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
/*        
        case "LOGIN_PROCESSING":
            return {
                ...state,
                loading: true
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed',
                loading: false
            };
        case 'UPDATE_USER_AUTH':
            return {
                 isLoggedIn: true,
                 pro: action.payload.pro,
                 access_token: action.payload.access_token,
                 authError: null,
                 loading: false
             };            
*/            
        case 'LOGIN_SUCCESS':
            return {
                isLoggedIn: true,
                pro: action.payload.pro,
                access_token: action.payload.access_token,
                authError: null,
                loading: false
            };
        case 'LOG_OUT':
            localStorage.clear();
            return {
                initState
            };
        default:
            return state;
    }
}

export default authReducer;