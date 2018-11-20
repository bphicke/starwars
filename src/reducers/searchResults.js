import { SEARCH_RESULTS_ACTION } from '../constants';

const initialState={
  searchResults: []
};

export default function searchResults(state=initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case SEARCH_RESULTS_ACTION:
      return {
        ...state,
        searchResults: payload.slice()
      };
      default:
        return state;
  }
}