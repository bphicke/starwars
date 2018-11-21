import {
  IS_LOADING_ACTION,
  SEARCH_RESULTS_ACTION,
  SELECTED_RESULT_ACTION,
  SWAP_TO_MOVIE_ACTION,
  SWAP_TO_PERSON_ACTION
} from '../constants';

const initialState={
  isLoading: false
};

export default function isLoading(state=initialState, action) {
  const { type } = action;

  switch(type) {
    case IS_LOADING_ACTION:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_RESULTS_ACTION:
      return {
        ...state,
        isLoading: false,
      };
      case SELECTED_RESULT_ACTION:
      return {
        ...state,
        isLoading: false,
      };
    case SWAP_TO_MOVIE_ACTION:
      return {
        ...state,
        isLoading: false,
      };
    case SWAP_TO_PERSON_ACTION:
      return {
        ...state,
        isLoading: false,
      };
    default:
        return state;
  }
};