//import createStore and applyMiddleware for creating our store and enhancing our dispatcher
import { createStore, applyMiddleware } from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import reducer from './reducer';


const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;

