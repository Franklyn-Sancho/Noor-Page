import React from "react";
import "./Contact.css";
import Header from "../../components/header/Header";

export default function Contact() {
  return (
    <div className="container">
      <Header />
      <div className="contact-page">
          <div className="contact-form">
          <div className="title-contact">
              <h1>Por mais que a gente faça de tudo
              para que as informações sejam as 
              mais claras possíveis. Nem sempre
              conseguimos.</h1> 
              <p>Tem alguma dúvida? preencha
              o formulário e fale conosco</p>
          </div>
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
            <label for="exampleFormControlSelect1">Qual o motivo do contato?</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Escolha o assunto</option>
              <option>Vendas</option>
              <option>Preços</option>
              <option>Reclamação</option>
              <option>assuntos gerais</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Escreva aqui a sua mensagem</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
