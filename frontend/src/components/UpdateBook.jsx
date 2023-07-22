import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

function UpdateBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    picture: "",
    price: null,
  });
  const [error, setError] = useState(false);
  const { id } = useParams();
  // const [updateSuccess, setUpdateSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:6001/books/${id}`, book)
      .then((res) => {
        console.info(res);
        navigate("/");
      })

      // .then((res) => {
      //   // Use toast notification to show a success message
      //   setUpdateSuccess(true);
      //   navigate("/");
      // })
      .catch((err) => setError(err));
  }

  return (
    <section className="form-container">
      <div className="form">
        <h1 className="add-title">MISE À JOUR LE LIVRE</h1>
        <form action="" className="form-add">
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
            placeholder="Book price"
            name="price"
            onChange={handleChange}
          />
        </form>
        <div className="btn-add-produit">
          <button type="button" onClick={handleSubmit} className="add-btn">
            Modifier
          </button>
          {error && "Something went wrong!"}
          {/* {updateSuccess && <p>Book updated successfully!</p>} */}
          <Link to="/" className="add-btn">
            See all books{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
//   const [book, setBook] = useState({
//     title: "",
//     desc: "",
//     price: null,
//     cover: "",
//   });
//   const [error, setError] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const bookId = location.pathname.split("/")[2];

//   const { id } = useParams;

//   const handleChange = (e) => {
//     setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   function handleClick(event) {
//     event.preventDefault();
//     axios
//       .add(`http://localhost:6001/books/${bookId}`, book)
//       .then((res) => {
//         console.log(res);
//         navigate("/");
//       })
//       .catch((err) => setError(err));
//   }

//   return (
//     <div className="form">
//       <h1>Update the Book</h1>
//       <input
//         type="text"
//         placeholder="Book title"
//         name="title"
//         onChange={handleChange}
//       />
//       <textarea
//         rows={5}
//         type="text"
//         placeholder="Book desc"
//         name="desc"
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         placeholder="Book price"
//         name="price"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         placeholder="Book cover"
//         name="cover"
//         onChange={handleChange}
//       />
//       <button type="button" onClick={handleClick}>
//         Update
//       </button>
//       {error && "Something went wrong!"}
//       <Link to="/">See all books</Link>
//     </div>
//   );
// }

export default UpdateBook;
