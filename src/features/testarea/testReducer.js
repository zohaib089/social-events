import { createReducer } from '../../app/common/util/reducerUtil';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';

const initialState = {
  data: 4788
};

export const incrementCounter = (state, payload) => {
  return {
    ...state,
    data: state.data + 1
  };
};

export const decrementCounter = (state, payload) => {
  return {
    ...state,
    data: state.data - 1
  };
};

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:

//     case DECREMENT_COUNTER:

//     default:
//       return state;
//   }
// };

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});
