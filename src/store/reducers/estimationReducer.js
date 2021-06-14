import { FETCH_ESTIMATION, NEW_ESTIMATION } from '../actions/estimationAction';

const initState = []


export default function (state = initState, action) {
    switch (action.type) {
        case "FETCH_ESTIMATION":
          return {
            state
          };
        case "NEW_ESTIMATION":
          return {
            state
          };
          
        default:
          return state
      }
}