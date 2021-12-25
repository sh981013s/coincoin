import React from 'react';
import Router from './Router';
import { Reset } from 'styled-reset';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
