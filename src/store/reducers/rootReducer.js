import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
    alert: alertReducer,
    registration: registrationReducer
})

export default rootReducer;