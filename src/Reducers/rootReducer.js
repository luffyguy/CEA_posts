import likesReducer from './likesReducer';
import dislikesReducer from './dislikesReducer';
import postsReducer from './postsReducer'
import editReducer from './editReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  likes: likesReducer,
  dislikes: dislikesReducer,
  posts: postsReducer,
  edit: editReducer
})

export default rootReducer