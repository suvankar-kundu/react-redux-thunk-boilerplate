import { combineReducers } from 'redux';
import UserReducer from './user';
import PostReducer from './post';

export default combineReducers({
  posts: PostReducer,
  users: UserReducer
});