import { MOVIES_RADIO_ACTION, PEOPLE_RADIO_ACTION } from '../constants';

const initialState={
  moviesRadio: false,
  peopleRadio: true
};

export default function selectRadioReducer(state=initialState, action) {
  const { type } = action;

  switch(type) {
    case MOVIES_RADIO_ACTION:
      return {
        ...state,
        moviesRadio: true,
        peopleRadio: false
      };
    case PEOPLE_RADIO_ACTION:
      return {
        ...state,
        moviesRadio: false,
        peopleRadio: true
      }
    default:
        return state;
  }
};