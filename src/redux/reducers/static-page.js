const initialState = [];

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case '@static-page/fetch-page': {
      if (state.findIndex(({ alias }) => alias === action.payload.alias) !== -1) {
        return state;
      }

      return [...state, action.payload];
    }

    default:
      return state;
  }
}
