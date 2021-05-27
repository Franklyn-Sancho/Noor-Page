import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

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
        <Link to="/contatos">
        <i className="fas fa-comment-dots"></i>
        </Link>
        <Link to="/favoritos">
        <i className="fas fa-heart"></i>
        </Link>
        <Link to="/cadastro">
        <i className="fas fa-user"></i>
        </Link>
        <Link to="/carrinho">
        <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input placeholder="Pesquise seu produto"  />
      </div>
    </div>
  );
}
