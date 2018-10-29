import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from '../reducer';

export default createStore(mainReducer, applyMiddleware(thunkMiddleware));