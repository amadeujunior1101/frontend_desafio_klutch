import React from "react";
import SimularTaxas01 from "./pages/SimularTaxas01";
import SolicitarEmprstimo01 from "./pages/SolicitarEmprestimo01";
import SolicitarEmprstimo02 from "./pages/SolicitarEmprestimo02";
import SolicitarEmprstimo03 from "./pages/SolicitarEmprestimo03";
import SolicitarEmprstimo04 from "./pages/SolicitarEmprestimo04";
import SolicitarEmprstimo05 from "./pages/SolicitarEmprestimo05";
import { GlobalStyle } from "./global";

import Routes from './routes/Routes';

import { PostsContext, postsContextDefaultValue } from "./context/Context";
import { AuthProvider } from './context/Context2'

function App() {
  return (
    // <PostsContext.Provider value={postsContextDefaultValue}>
    //   <GlobalStyle />
    //   <SimularTaxas01 />
    // </PostsContext.Provider>
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
}

export default App;

