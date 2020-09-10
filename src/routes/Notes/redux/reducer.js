import { createReducer } from '@reduxjs/toolkit';

export default createReducer(
  { loading: false, items: [], error: null },
  {
    ADD_NOTE: (state, action) => ({ ...state, items: [...state.items, action.payload] }),
    FETCH_NOTES_START: (state) => ({ ...state, loading: true }),
    FETCH_NOTES_FAILURE: (state, { payload }) => ({ ...state, loading: false, error: payload.error }),
    FETCH_NOTES_SUCCESS: (state, action) => ({ ...state, items: [...action.payload], loading: false, error: null }),
    DELETE_NOTE: (state, action) => state.filter((note) => note.id !== action.payload.id),
  }
);
