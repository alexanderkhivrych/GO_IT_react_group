import { createReducer } from '@reduxjs/toolkit';

export default createReducer([], {
  '@static-page/fetch-page': (state, action) => {
    if (state.findIndex(({ alias }) => alias === action.payload.alias) !== -1) {
      return state;
    }

    return [...state, action.payload];
  },
});
