import React from "react";
import "./Login.css";
import Header from "../../components/header/Header";

export default function Conta() {
  return (
    <div className="container">
      <Header />
      <div className="conta-page">
        <div className="login-message">
          <h1>Seja muito bem vindo.
          </h1>
          <p>
            Sua conta e seus dados estão seguros conosco.
            Basta preencher o formulário com os dados 
            do seu cadastro para ter acesso as melhores ofertas.
            Qualquer dúvida ou problema com a sua conta ou acesso,
            basta entrar no nosso canal de contato, estamos a disposição
            para responder as suas duvidas ou solucionar o seu 
            problema o mais breve possível. É isso, seja bem vindo 
            mais uma vez a Noor :)
          </p>
        </div>
        <div className="login-form">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Endereço de email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Seu email"
              />
              <small id="emailHelp" class="form-text text-muted">
                Nunca vamos compartilhar seu email, com ninguém.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Senha</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Senha"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Clique em mim
              </label>
            </div>
            <button type="submit" class="btn btn-primary" style={{height: '40px'}}>
              Entrar <i class="fas fa-sign-in-alt" style={{marginLeft: '5px'}}></i>
            </button>
             <button type="submit" class="btn btn-danger" style={{marginLeft: '60px', height: '40px'}}>
             esqueceu a conta? <i class="fas fa-key"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
