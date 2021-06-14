import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import registrationReducer from './registrationReducer';
import authReducer from './authReducer';
import esitimationReducer from './estimationReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    registration: registrationReducer,
    esitimation: esitimationReducer
})

export default rootReducer;