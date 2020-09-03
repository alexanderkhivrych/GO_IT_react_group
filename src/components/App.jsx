import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Routes, Header } from './';
import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
