import { v4 as uuid } from 'uuid';
import { SET_ALERT, REMOVE_ALERT, RESET_ALERT } from './typesAction';

export const setAlert = (message, alertType, timeout = 3000) => dispatch => {
    const id = uuid();
    dispatch({
        type: SET_ALERT,
        payload: { message, alertType, id }
    })
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}

export const resetAlert = () => dispatch => {
    dispatch({
        type: RESET_ALERT,
    })
}