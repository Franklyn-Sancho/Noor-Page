import React from "react";
import "./Favorites.css";
import Header from "../../components/header/Header";


export default function Favorites() {
  return (
    <div className="container">
      <Header />
      <div className="favorite-table">
        <h1>Aqui estão todos os seus favoritos<i class="fas fa-heart" style={{color: 'red'}}></i></h1>
        <div class="card" style={{ width: "15rem", marginLeft: "10px" }}>
          <img class="card-img-top" src="" alt="Imagem de capa do card" />
          <div class="card-body">
            <h5 class="card-title">Título do card</h5>
            <p class="card-text">
              Produto
            </p>
            <button href="#" class="btn btn-primary" style={{background: '#6be579', color: 'black'}}>
              Comprar
            </button>
            <i class="fas fa-trash" style={{marginLeft: '70px', color: 'red', fontSize: '25px'}}></i>
          </div>
        </div>
        
      </div>
    </div>
  );
}
