import { combineReducers } from 'redux';
import personalReducer from './personalReducer';
import workReducer from './workReducer';

const rootReducer = combineReducers({ personalReducer, workReducer });

export default rootReducer;
