import { combineReducers } from 'redux';
import userReducer from './userSlice/userSlice';
import projectReducer from './projectSlice/projectSlice';

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
});

export default rootReducer;
