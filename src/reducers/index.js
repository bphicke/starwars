import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import searchType from './searchType'
import searchResults from './searchResults';
import selectedResult from './selectedResult';
import isLoading from './isLoading';

const rootReducer = combineReducers({
  searchQuery,
  searchType,
  searchResults,
  selectedResult,
  isLoading
});

export default rootReducer;