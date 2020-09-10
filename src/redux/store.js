import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { notes } from '../api';
import noteReducer from '../routes/Notes/redux/reducer';
import staticDocument from '../routes/StaticDocument/redux/reducer';

const rootReducer = combineReducers({
  notes: noteReducer,
  staticDocument: staticDocument,
});

const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  console.groupEnd(action.type);

  return next(action);
};

// const thunkMiddleware = ({ dispatch, getState }) => (next) => (action) =>
//   typeof action === 'function' ? action(dispatch, getState) : next(action);

const middlewares = [
  loggerMiddleware,
  thunk.withExtraArgument({
    api: {
      notes,
    },
  }),
];

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

export default store;
