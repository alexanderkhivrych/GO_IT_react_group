import { createAction } from '@reduxjs/toolkit';

const fetchStart = () => ({
  type: 'FETCH_NOTES_START',
});

const fetchSuccess = (data) => ({
  type: 'FETCH_NOTES_SUCCESS',
  payload: data,
});

const fetchFailure = (error) => ({
  type: 'FETCH_NOTES_FAILURE',
  payload: error,
});

const fetchNotes = () => async (
  dispatch,
  getState,
  {
    api: {
      notes: { getNotes },
    },
  }
) => {
  dispatch(fetchStart());

  try {
    const notes = await getNotes();

    dispatch(fetchSuccess(notes));
  } catch (err) {
    dispatch(fetchFailure({ error: err.message }));
  }
};

const addNote = createAction('ADD_NOTE');

const deleteNote = createAction('DELETE_NOTE', (id) => ({
  payload: {
    id,
  },
}));

export { addNote, deleteNote, fetchNotes };
