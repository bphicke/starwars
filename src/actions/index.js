import { SEARCH_QUERY_ACTION } from '../constants';

export const searchQueryAction = (searchQuery) => ({
  type: SEARCH_QUERY_ACTION,
  payload: searchQuery
});