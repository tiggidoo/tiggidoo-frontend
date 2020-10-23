const initialState = {
    loading: false,
    data:[],
    errorMsg: ""
};

//El primer parametro de este reducer debe ser STATE
//El segundo parametro debe ser la ACTION
const registrationReducer = (state = initialState, action) => {
    //const { type, payload } = action;

    switch (action.type) {
        case "POKEMON_LIST_LOADING":
            return {
                ...state, 
                loading: true,
                errorMsg: ""
            };

            case "POKEMON_LIST_FAIL":
                return {
                    ...state, 
                    loading: false,
                    errorMsg: "Enabled to get pokemon"
                };
            case "POKEMON_LIST_SUCCESS":
                return {
                    ...state, 
                    loading: false,
                    data: action.payload.results,
                    errorMsg: ""
                };
                default:
            return state;
    }
}

export default registrationReducer;