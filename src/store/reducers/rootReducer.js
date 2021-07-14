import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import registrationReducer from './registrationReducer';
import authReducer from './authReducer';
import reservationReducer from './reservationReducer';
import estimationReducer from './estimationReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    registration: registrationReducer,
    reservation: reservationReducer,
    estimation: estimationReducer
})

export default rootReducer;