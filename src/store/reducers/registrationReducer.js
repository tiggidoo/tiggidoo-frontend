const DefaultState = {
  loading: false,
  pro: [],
  errorMsg: "",
  status: 0
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
          console.log(action.error);
          console.log(action.error.response.data.error);
          return {
            ...state,
            loading: false,
            errorMsg: "unable to upload the information",
            status: action.payload
          };
          case "REGISTRATION_SUCCESS":
            console.log(action.payload);
            localStorage.setItem("status", action.payload.status);
            return {
              ...state,
              loading: false,
              pro: action.payload.data.pro,
              status: action.payload.status,
              errorMsg: ""
            };
        default:
          return state
      }
}

export default registrationReducer;