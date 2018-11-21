import { SELECTED_RESULT_ACTION } from '../constants';

const initialState={
  selectedResult: {}
};

export default function selectedResult(state=initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case SELECTED_RESULT_ACTION:
      return {
        ...state,
        selectedResult: payload
      };
    default:
      return state;
  }
}