import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import searchType from './searchType'
import searchResults from './searchResults';

const rootReducer = combineReducers({
  searchQuery,
  searchType,
  searchResults
});

export default rootReducer;