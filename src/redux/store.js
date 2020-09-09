import { createStore, combineReducers } from 'redux';
import noteReducer from '../routes/Notes/redux/reducer';
import staticDocument from '../routes/StaticDocument/redux/reducer';

const rootReducer = combineReducers({
  notes: noteReducer,
  staticDocument: staticDocument,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
