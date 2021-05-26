import React from "react";
import "./Login.css";
import Header from "../../components/header/Header";

export default function Login() {
  return (
    <div className="container">
      <Header />
      <div className="page-login">
        <div className="form-login">
          <div className="title-login">
            <h1>cadastre-se para aproveitar as melhores ofertas</h1>
          </div>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Nome"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Digite o seu Email"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Senha</label>
              <input
                type="password"
                class="form-control"
                id="inputAddress"
                placeholder="Digite a sua senha"
              />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Endereço</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Digite aqui o seu endereço"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">Cidade</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputEstado">Estado</label>
                <select id="inputEstado" class="form-control">
                  <option selected>Escolher...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputCEP">CEP</label>
                <input type="text" class="form-control" id="inputCEP" />
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                 Aceitar os termos de uso e privacidade
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
