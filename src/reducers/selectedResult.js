import { SELECTED_RESULT_ACTION, SWAP_TO_MOVIE_ACTION, SWAP_TO_PERSON_ACTION } from '../constants';

const initialState={
  selectedResult: {
    filmTitles:[''],
    characterNames:[''],
    films:[''],
    opening_crawl: [''],
    characters: ['']
  }
};

export default function selectedResult(state=initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case SELECTED_RESULT_ACTION:
      return {
        ...state,
        selectedResult: payload
      };
    case SWAP_TO_MOVIE_ACTION:
      return {
        ...state,
        selectedResult: payload
      };
    case SWAP_TO_PERSON_ACTION:
      return {
        ...state,
        selectedResult: payload
      };
    default:
      return state;
  }
}