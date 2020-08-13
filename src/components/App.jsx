import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Header } from './';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes />
  </BrowserRouter>
);

export default App;
