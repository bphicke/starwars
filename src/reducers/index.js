import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import searchType from './searchType'


const rootReducer = combineReducers({
  searchQuery,
  searchType
});

export default rootReducer;