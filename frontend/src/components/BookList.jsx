import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

function BookList({ addBookToCart }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"}/books`
    )
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:6001/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.info(err);
    }
  };

  return (
    <section className="book-list">
      <h1 className="sell-title">Vos recommandations</h1>
      <div className="book-sell">
        {books.map((book) => (
          <div key={book.id} value={book.title} className="product-grid2">
            <figure className="product-book">
              <img
                src={`${
                  import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"
                }${book.picture}`}
                alt={books.title}
                className="product-image2"
              />

              <figcaption className="product-content">
                <p className="product-text">{book.title}</p>
                <p className="product-text">{book.author}</p>
                <p className="product-text">{book.price}€</p>
              </figcaption>
            </figure>
            <div className="btn-book">
              <button
                type="button"
                className="btn-list"
                onClick={() => addBookToCart(book)}
              >
                Ajouter au panier
              </button>
              <button
                type="button"
                className="btn-list2"
                onClick={() => handleDelete(book.id)}
              >
                Supprimer
              </button>
              <Link to={`/update/${book.id}`} className="btn-list3">
                Mise à jour
              </Link>
              <Link to="/add" className="btn-list4">
                Ajouter
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

BookList.propTypes = {
  addBookToCart: PropTypes.func.isRequired,
};
export default BookList;
