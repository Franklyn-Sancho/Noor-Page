import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="title">Noor</div>
      <div className="product-menu">
        <button type="button" className="btn btn-outline-dark">
          Acessórios
        </button>
        <button type="button" class="btn btn-outline-dark">
          Lançamentos
        </button>
        <button type="button" class="btn btn-outline-dark">
          Categorias
        </button>
        <button type="button" class="btn btn-outline-dark">
          Coleções
        </button>
        <button type="button" class="btn btn-outline-dark">
          Estação
        </button>
      </div>
      <div className="search-item">
        <i className="fas fa-comment-dots"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-user"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
      <div className="search-bar">
        <input placeholder="Pesquise seu produto"  />
      </div>
    </div>
  );
}
