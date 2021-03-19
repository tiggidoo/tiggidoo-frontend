// This is the global state of the app
import { createStore, applyMiddleware } from 'redux'; //combineReducers
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import { getUserLoggedInAction } from './actions/authAction';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
getUserLoggedInAction()(store.dispatch);
export default store;