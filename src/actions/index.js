import {
  SEARCH_QUERY_ACTION,
  MOVIES_RADIO_ACTION,
  PEOPLE_RADIO_ACTION,
  SEARCH_RESULTS_ACTION,
  SELECTED_RESULT_ACTION,
  SWAP_TO_MOVIE_ACTION,
  SWAP_TO_PERSON_ACTION,
  IS_LOADING_ACTION
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

export const selectedResult = (selectedResult) => ({
  type: SELECTED_RESULT_ACTION,
  payload: selectedResult
});

export const characterToMovie = (filmData) => ({
  type: SWAP_TO_MOVIE_ACTION,
  payload: filmData
});

export const movieToCharacter = (characterData) => ({
  type: SWAP_TO_PERSON_ACTION,
  payload: characterData
});

export const isLoading = () => ({
  type: IS_LOADING_ACTION
});