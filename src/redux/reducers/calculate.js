import {INCREASE, DECREASE} from '../../constants/actionConstants.js';

const initial_data = {
  number: 0,
};

export const calculate = (state = initial_data, action) => {
  switch (action.type) {
    case INCREASE: {
      return {
        ...state,
        number: state.number + 1,
      };
    }
    case DECREASE: {
      return {
        ...state,
        number: state.number - 1,
      };
    }
    default: {
      return state;
    }
  }
};
