const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
    //count: 0
};

//El primer parametro de este reducer debe ser STATE
//El segundo parametro debe ser la ACTION
const registrationReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "REGISTRATION_PROCESSING":
          return {
            ...state,
            loading: true,
            errorMsg: ""
          };
        case "REGISTRATION_FAIL":
          return {
            ...state,
            loading: false,
            errorMsg: "unable to upload the information"
          };
          case "REGISTRATION_FAIL1":
            return {
              ...state,
              loading: false,
              errorMsg: "TRY_CATCH"
            };
          case "REGISTRATION_SUCCESS":
          return {
            ...state,
            loading: false,
            data: action.payload,
            errorMsg: "",
            count: action.payload.count
          };
        default:
          return state
      }
}

export default registrationReducer;

/**
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
            errorMsg: "unable to get pokemon"
          };
        case "POKEMON_LIST_SUCCESS":
          return {
            ...state,
            loading: false,
            data: action.payload.results,
            errorMsg: "",
            count: action.payload.count
          };
        default:
          return state
      }

 */