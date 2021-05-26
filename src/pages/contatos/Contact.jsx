import React from "react";
import "./Contact.css";
import Header from "../../components/header/Header";

export default function Contact() {
  return (
    <div className="container">
      <Header />
      <div className="contact-page">
        <div className="message-contact">
          <h1>Seja muito bem vindo. Como posso ajudar?
          </h1>
          <p>
            Sim, a gente faz de tudo para que todas as 
            informações sejam claras. Mas pode ser que 
            você tenha alguma dúvida, ou queira reportar
            algum erro, ou até mesmo fazer alguma reclamação.
            Nos preocupamos demais com o que você tem a dizer.
            Por isso criamos esse canal, para que você possa 
            falar conosco a qualquer momento. Basta preencher
            o formulário. Estamos a disposição, nos escreva ;)

          </p>
        </div>
        <div className="contact-form">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Nome</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="nome@exemplo.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="nome@exemplo.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">
                Qual o motivo do contato?
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Escolha o assunto</option>
                <option>Vendas</option>
                <option>Preços</option>
                <option>Reclamação</option>
                <option>assuntos gerais</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                Escreva aqui a sua mensagem
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <button type="submit" class="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
