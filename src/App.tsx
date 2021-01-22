import React from "react";
import SimulaTaxas01 from "./pages/SimulaTaxas01";
import SolicitarEmprstimo01 from "./pages/SolicitarEmprestimo01";
import SolicitarEmprstimo02 from "./pages/SolicitarEmprestimo02";
import SolicitarEmprstimo03 from "./pages/SolicitarEmprestimo03";
import SolicitarEmprstimo04 from "./pages/SolicitarEmprestimo04";
import SolicitarEmprstimo05 from "./pages/SolicitarEmprestimo05";
import { GlobalStyle } from "./global";

import {PostsContext, postsContextDefaultValue} from "./context/Context";

function App() {
  return (
    <PostsContext.Provider value={postsContextDefaultValue}>
        <GlobalStyle />
        <SimulaTaxas01 />
    </PostsContext.Provider>
  );
}

export default App;
