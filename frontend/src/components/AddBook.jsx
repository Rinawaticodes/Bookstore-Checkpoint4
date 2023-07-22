import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    picture: "",
    price: null,
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    alert("Le produit a ajouté");
    axios
      .post("http://localhost:6001/books", book)
      .then((res) => {
        console.info(res);
        navigate("/");
      })
      .catch((err) => setError(err));
  }

  return (
    <section className="form-container">
      <div className="form">
        <h1 className="add-title">AJOUTER LIVRE</h1>
        <form onSubmit={handleSubmit} className="form-add">
          <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Book author"
            name="author"
            onChange={handleChange}
          />
          <textarea
            rows={5}
            type="text"
            placeholder="Book desc"
            name="description"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Book picture"
            name="picture"
            onChange={handleChange}
          />
          <input
            type="number"
            id="book price"
            name="price"
            placeholder="Book price"
            min="10"
            max="1000"
            onChange={handleChange}
          />
          <div className="btn-add-produit">
            <button type="submit" className="add-btn">
              Add produit
            </button>
            {error && "Something went wrong!"}
            <Link to="/" className="add-btn">
              See all books
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddBook;
