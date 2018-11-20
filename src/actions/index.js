import {
  SEARCH_QUERY_ACTION,
  MOVIES_RADIO_ACTION,
  PEOPLE_RADIO_ACTION,
  SEARCH_RESULTS_ACTION
} from '../constants';

export const searchQueryAction = (searchQuery) => ({
  type: SEARCH_QUERY_ACTION,
  payload: searchQuery
});

export const moviesRadioAction = () => ({
  type: MOVIES_RADIO_ACTION
});

export const peopleRadioAction = () => ({
  type: PEOPLE_RADIO_ACTION
});

export const searchResultsAction = (searchResults) => ({
  type: SEARCH_RESULTS_ACTION,
  payload: searchResults
});