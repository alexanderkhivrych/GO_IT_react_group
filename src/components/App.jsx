import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Header } from './';
import MainRoute from '../routes/MainRoute';
import store, { persistor } from '../redux/store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Header />
        <MainRoute />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
