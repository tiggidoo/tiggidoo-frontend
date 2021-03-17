import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import registrationReducer from './registrationReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    registration: registrationReducer
})

export default rootReducer;