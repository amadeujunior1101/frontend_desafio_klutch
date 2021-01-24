import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SimulaTaxas01 from '../pages/SimularTaxas01';
import SolicitarEmprestimo01 from '../pages/SolicitarEmprestimo01';
import SolicitarEmprestimo02 from '../pages/SolicitarEmprestimo02';
import SolicitarEmprestimo03 from '../pages/SolicitarEmprestimo03';
import SolicitarEmprestimo04 from '../pages/SolicitarEmprestimo04';
import SolicitarEmprestimo05 from '../pages/SolicitarEmprestimo05';

//Criar o componentes com as rotas
// const history = createMemoryHistory(location)
function Routes() {
    return (
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={SimulaTaxas01} />
                <Route path="/simular-taxas" component={SimulaTaxas01} />
                <Route path="/solicitar_emprestimo01"  component={SolicitarEmprestimo01} />
                <Route path="/solicitar_emprestimo02"  component={SolicitarEmprestimo02} />
                <Route path="/solicitar_emprestimo03"  component={SolicitarEmprestimo03} />
                <Route path="/solicitar_emprestimo04"  component={SolicitarEmprestimo04} />
                <Route path="/solicitar_emprestimo05/:id"  component={SolicitarEmprestimo05} />
                
                {/* <Route path="*" component={Page404} /> */}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;