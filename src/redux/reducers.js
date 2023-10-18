import { combineReducers } from 'redux';
import userReducer from './userSlice/userSlice';
import projectReducer from './projectSlice/projectSlice';
import apiReducer from './apiSlice/apiSlice';

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  api: apiReducer,
});

export default rootReducer;
