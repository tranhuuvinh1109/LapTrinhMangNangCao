import { combineReducers } from 'redux';
import userReducer from './userSlice/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
