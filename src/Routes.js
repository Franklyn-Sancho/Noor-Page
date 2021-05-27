import React from "react";
import Main from './pages/main/Main'
import Cadastrar from './pages/login/Cadastrar'
import Contact from './pages/contatos/Contact'
import Favorites from './pages/favoritos/Favorites'
import Carrinho from './pages/cart/Carrinho'
import Login from './pages/conta/Login'
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/cadastro" component={Cadastrar} />
        <Route exact path="/contatos" component={Contact} />
        <Route exact path="/favoritos" component={Favorites} />
        <Route exact path="/carrinho" component={Carrinho} />
        <Route exact path="/login" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
