import topicsListReducer from './topics-list-reducer';
import threadsListReducer from './threads-list-reducer';
import postsListReducer from './posts-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  topicsList: topicsListReducer,
  threadsList: threadsListReducer,
  postsList: postsListReducer
})

export default rootReducer;