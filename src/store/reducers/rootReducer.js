import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
    registration: registrationReducer
})

export default rootReducer;