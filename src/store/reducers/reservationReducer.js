import { GET_RESERVATIONS_LIST } from '../actions/typesAction'

const initState = {
    request: null
};

const reservationReducer = (state = initState, action) => {
    const { type, payload } = action
    
    switch(type){

        case GET_RESERVATIONS_LIST:
            return {
                ...state,
                request: payload
            };
        default:
            return initState

    }
}

export default reservationReducer