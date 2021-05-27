import React from "react";
import "./Carrinho.css";
import Header from "../../components/header/Header";

export default function Carrinho() {
  return (
    <div className="container">
      <Header />
      <div className="cart-page">
        <div className="title-cart">
          <h1>
            Aqui está o seu carrinho de compras
            <i class="fas fa-shopping-cart" style={{ color: "#6be579" }}></i>
          </h1>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
}
