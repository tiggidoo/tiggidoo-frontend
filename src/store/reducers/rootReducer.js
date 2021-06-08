import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import registrationReducer from './registrationReducer';
import authReducer from './authReducer';
import reservationReducer from './reservationReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    registration: registrationReducer,
    reservation: reservationReducer
})

export default rootReducer;