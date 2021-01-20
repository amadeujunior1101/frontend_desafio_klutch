import React from 'react';
import SimulaTaxas01 from './pages/SimulaTaxas01';
import SolicitarEmprstimo01 from './pages/SolicitarEmprestimo01';
import { GlobalStyle } from './global';

function App() {
  return (
    <React.Fragment>
        <GlobalStyle />
        <SolicitarEmprstimo01 />
    </ React.Fragment>
  );
}

export default App;
