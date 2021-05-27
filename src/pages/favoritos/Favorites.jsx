import React from "react";
import "./Favorites.css";
import Header from "../../components/header/Header";


export default function Favorites() {
  return (
    <div className="container">
      <Header />
      <div className="favorite-table">
        <h1>
          Aqui estão todos os seus favoritos
          <i
            class="fas fa-heart"
            style={{ color: "red", marginLeft: "5px" }}
          ></i>
        </h1>
        <h6>Esse espaço é para que você possa decidir com mais conforto as suas compras. 
          Caso queira analisar mais um pouco o nosso catálogo, não se preocupe, seus favoritos
          continuarão aqui :)
        </h6>
        <div
          class="card-deck"
          style={{ width: "80rem", marginLeft: "45px", paddingTop: "20px" }}
        >
          <div class="card">
            <img class="card-img-top" src="" alt="Imagem de capa do card" />
            <div class="card-body">
              <h5 class="card-title">Nome produto</h5>
              <p class="card-text">Descrição do produto</p>
              <p class="card-text">
                <small class="text-muted">Atualizados 3 minutos atrás</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="" alt="Imagem de capa do card" />
            <div class="card-body">
              <h5 class="card-title">Título do card</h5>
              <p class="card-text">mensagem</p>
              <p class="card-text">
                <small class="text-muted">Atualizados 3 minutos atrás</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="" alt="Imagem de capa do card" />
            <div class="card-body">
              <h5 class="card-title">Título do card</h5>
              <p class="card-text">mensagem</p>
              <p class="card-text">
                <small class="text-muted">Atualizados 3 minutos atrás</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="" alt="Imagem de capa do card" />
            <div class="card-body">
              <h5 class="card-title">Título do card</h5>
              <p class="card-text">mensagem</p>
              <p class="card-text">
                <small class="text-muted">Atualizados 3 minutos atrás</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="" alt="Imagem de capa do card" />
            <div class="card-body">
              <h5 class="card-title">Título do card</h5>
              <p class="card-text">mensagem</p>
              <p class="card-text">
                <small class="text-muted">Atualizados 3 minutos atrás</small>
              </p>
            </div>
          </div>
        </div>
        <div className="shopping-card">
         <button
              type="submit"
              className="btn btn-danger"
              style={{ height: "50px", width: '220px', border: "0"}}
            >
              Esvaziar favoritos <i class="fas fa-trash" style={{marginLeft: '5px',}}></i>
            </button>
            <button
              type="submit"
              className="btn btn-success"
              style={{ height: "50px", width: '225px', border: "0"}}
            >
              Comprar todos <i class="fas fa-shopping-cart"></i>
            </button> 
        </div>
      </div>
    </div>
  );
}
