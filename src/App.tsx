import React from 'react';
import SimulaTaxas01 from './pages/SimulaTaxas01';
import SolicitarEmprstimo01 from './pages/SolicitarEmprestimo01';
import SolicitarEmprstimo02 from './pages/SolicitarEmprestimo02';
import SolicitarEmprstimo03 from './pages/SolicitarEmprestimo03';
import { GlobalStyle } from './global';

function App() {
  return (
    <React.Fragment>
        <GlobalStyle />
        <SolicitarEmprstimo03 />
    </ React.Fragment>
  );
}

export default App;
