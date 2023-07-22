import React from "react";
import icabog from "../assets/Icabog.jpeg";
import fer from "../assets/book/book15.png";
import wonder from "../assets/book/book6.jpeg";
import "../App.css";

function BestSeller() {
  return (
    <section className="best-book">
      <h1 className="best-title">Les Meilleures Ventes</h1>
      <div className="book-list-top">
        <figure className="best-book-img">
          <img src={icabog} alt="icabog" className="best" />
          <figcaption className="caption-book">Icaborg</figcaption>
          <figcaption className="caption-book">J.K.Rowling</figcaption>
          <p>18.00€</p>
        </figure>
        <figure className="best-book-img">
          <img src={fer} alt="icabog" className="best" />
          <figcaption className="caption-book">Le Coeur de Fer</figcaption>
          <figcaption className="caption-book">Nina Varela</figcaption>
          <p className="best-price">20.00€</p>
        </figure>
        <figure className="best-book-img">
          <img src={wonder} alt="icabog" className="best" />
          <figcaption className="caption-book">Wonder</figcaption>
          <figcaption className="caption-book">R.J.Palacio</figcaption>
          <p>12.00€</p>
        </figure>
      </div>
    </section>
  );
}

export default BestSeller;
