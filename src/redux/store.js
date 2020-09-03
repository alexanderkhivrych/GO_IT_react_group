import { createStore, combineReducers } from 'redux';
import noteReducer from './reducers/note';
import staticDocument from './reducers/static-page';

const rootReducer = combineReducers({
  notes: noteReducer,
  staticDocument: staticDocument,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
