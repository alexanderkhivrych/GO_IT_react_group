import { createReducer } from '@reduxjs/toolkit';

export default createReducer([], {
  ADD_NOTE: (state, action) => [...state, action.payload],
  DELETE_NOTE: (state, action) => state.filter((note) => note.id !== action.payload.id),
});
