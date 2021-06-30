import { GET_RESERVATIONS_LIST, GET_A_REQUEST, PROCESSING } from '../actions/typesAction'

const initState = {
    reservations: null,
    reservation: null
};

const reservationReducer = (state = initState, action) => {
    const { type, payload } = action
    
    switch(type){
        case PROCESSING: 
            return initState;
        case GET_RESERVATIONS_LIST:
            return {
                ...state,
                reservations: payload,
                reservation: null
            };
        case GET_A_REQUEST:
            return {
                ...state,
                reservations: null,
                reservation: payload
            };
        default:
            return initState

    }
}

export default reservationReducer