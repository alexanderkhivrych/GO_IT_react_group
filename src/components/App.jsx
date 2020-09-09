import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header } from './';
import MainRoute from '../routes/MainRoute';
import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <MainRoute />
    </BrowserRouter>
  </Provider>
);

export default App;
