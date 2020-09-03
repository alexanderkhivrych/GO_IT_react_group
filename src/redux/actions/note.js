const addNote = (payload) => ({
  type: 'ADD_NOTE',
  payload,
});

const deleteNote = (id) => ({
  type: 'DELETE_NOTE',
  payload: {
    id,
  },
});

export { addNote, deleteNote };
