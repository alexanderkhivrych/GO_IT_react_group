import { createAction } from '@reduxjs/toolkit';

const addNote = createAction('ADD_NOTE');

const deleteNote = createAction('DELETE_NOTE', (id) => ({
  payload: {
    id,
  },
}));

export { addNote, deleteNote };
