import React from "react";
import "./Main.css";
import Header from "../../components/header/Header";
import { Carousel } from "react-bootstrap";
import logo from "../../img/1.png";
import img from "../../img/2.png";

export default function Main() {
  return (
    <div className="container">
      <Header />
      <div className="slide-show">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="w-100" src={logo} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="w-100" src={img} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="products">
        
      </div>
    </div>
  );
}
