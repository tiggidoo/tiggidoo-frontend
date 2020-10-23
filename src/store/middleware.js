import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const isProd = process.env.NODE_ENV === 'production';
const middleWareList = [];

middleWareList.push(thunk);

if(!isProd){
    middleWareList.push(createLogger());
}

const middleWare = compose(applyMiddleware(...middleWareList));

export default middleWare;