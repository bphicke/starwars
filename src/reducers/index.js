import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import searchType from './searchType'
import searchResults from './searchResults';
import selectedResult from './selectedResult';

const rootReducer = combineReducers({
  searchQuery,
  searchType,
  searchResults,
  selectedResult
});

export default rootReducer;