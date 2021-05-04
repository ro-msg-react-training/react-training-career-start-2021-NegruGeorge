import {createStore,applyMiddleware} from 'redux';
import  logger from 'redux-logger'
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
// import {getAllProducts} from  './productList/productList.sagas';



const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger];



const store =  createStore(rootReducer,applyMiddleware(...middlewares));

export default store;
 