import likesReducer from './likesReducer';
import dislikesReducer from './dislikesReducer';
import postsReducer from './postsReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  likes: likesReducer,
  dislikes: dislikesReducer,
  posts: postsReducer
})

export default rootReducer