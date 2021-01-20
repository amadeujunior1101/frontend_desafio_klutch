import React from 'react';
import SimulaTaxas01 from './pages/SimulaTaxas01';
import SolicitarEmprstimo01 from './pages/SolicitarEmprestimo01';
import SolicitarEmprstimo02 from './pages/SolicitarEmprestimo02';
import SolicitarEmprstimo03 from './pages/SolicitarEmprestimo03';
import SolicitarEmprstimo04 from './pages/SolicitarEmprestimo04';
import { GlobalStyle } from './global';

function App() {
  return (
    <React.Fragment>
        <GlobalStyle />
        <SolicitarEmprstimo04 />
    </ React.Fragment>
  );
}

export default App;
