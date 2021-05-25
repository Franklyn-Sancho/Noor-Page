import React from "react";
import Main from './pages/main/Main'
import Login from './pages/login/Login'
import Contact from './pages/contatos/Contact'
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contatos" component={Contact} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}
