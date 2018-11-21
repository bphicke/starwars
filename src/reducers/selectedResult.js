import { SELECTED_RESULT_ACTION, SWAP_TO_MOVIE_ACTION } from '../constants';

const initialState={
  selectedResult: {
    filmTitles:[''],
    characterNames:[''],
    films:['']
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
    default:
      return state;
  }
}