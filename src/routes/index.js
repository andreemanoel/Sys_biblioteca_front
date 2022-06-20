import React from 'react';
import {BrowserRouter as Router, Switch } from 'react-router-dom';
import MDialog from '../components/MDialog';
import NavBar from '../components/NavBar';
import Usuario from '../screens/Usuario';
import Emprestimo from '../screens/Emprestimo';
import Home from '../screens/Home';
import RoutesPrivate from './routesPrivate';
import CreateUpdateUser from '../screens/CreateUpdateUser';
import Livro from '../screens/Livro';
import CreateUpdateLivro from '../screens/CreateUpdateLivro';
import CreateUpdateEmprestimo from '../screens/CreateUpdateEmprestimo';

const Routes = () => {
  return (
    <>
      <Router >
        <Switch>
            <NavBar>
                <RoutesPrivate path='/' exact component={Home} />
                <RoutesPrivate path='/usuarios' exact component={Usuario} />
                <RoutesPrivate path='/adicionar/user' exact component={CreateUpdateUser} />
                <RoutesPrivate path='/adicionar/user/:id' exact component={CreateUpdateUser} />
                <RoutesPrivate path='/livros' exact component={Livro} />
                <RoutesPrivate path='/adicionar/livro' exact component={CreateUpdateLivro} />
                <RoutesPrivate path='/adicionar/livro/:id' exact component={CreateUpdateLivro} />
                <RoutesPrivate path='/emprestimos' exact component={Emprestimo} />
                <RoutesPrivate path='/adicionar/emprestimo' exact component={CreateUpdateEmprestimo} />
                <RoutesPrivate path='/adicionar/emprestimo/:id' exact component={CreateUpdateEmprestimo} />
            </NavBar>
        </Switch>
      </Router >
      <MDialog />
    </>
  );
}

export default Routes;
