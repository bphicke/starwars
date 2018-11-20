import { SEARCH_QUERY_ACTION } from '../constants';

const initialState = {
  searchQuery: ''
}

export default function searchQueryReducer(state=initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case SEARCH_QUERY_ACTION:
      return {
        ...state,
        searchQuery: payload
      };
      default:
        return state;
  }
}