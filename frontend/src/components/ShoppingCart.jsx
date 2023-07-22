import React from "react";
import PropTypes from "prop-types";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import "../App.css";

function ShoppingCart({
  visibilty,
  books,
  onProductRemove,
  onClose,
  onQuantityChange,
  saveCart,
}) {
  return (
    <div
      className="modal"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="header">
          <h2>Votre Panier</h2>
          <button type="button" className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products">
          {books.length === 0 && (
            <span className="empty-text">Votre panier est vide</span>
          )}
          {books.map((book) => (
            <div className="cart-product" key={book.id}>
              <figure>
                <img
                  src={`${
                    import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
                  }${book.picture}`}
                  alt={books.title}
                  className="cart-product-image"
                />
              </figure>
              {/* <img src={book.picture} alt={book.title} /> */}
              <div className="product-info">
                <h3>{book.title}</h3>
                <span className="product-price">
                  {book.price * book.count} €
                </span>
              </div>
              <select
                className="count"
                value={book.count}
                onChange={(event) => {
                  onQuantityChange(book.id, event.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button
                type="button"
                className="btn remove-btn"
                onClick={() => onProductRemove(book)}
              >
                <RiDeleteBin5Fill size={20} />
              </button>
            </div>
          ))}
          {books.length > 0 && (
            <button
              type="button"
              className="btn checkout-btn"
              onClick={saveCart}
            >
              Valider le panier
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  visibilty: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  onProductRemove: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  saveCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
