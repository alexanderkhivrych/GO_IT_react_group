import React from 'react';

import Button from './Button';
import ModeContext from '../modeContext';
const App = () => (
  <ModeContext.Provider value="dark">
    <Button />
  </ModeContext.Provider>
);

export default App;
