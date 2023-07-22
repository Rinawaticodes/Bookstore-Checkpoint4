import { Link } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import "../App.css";
import ShoppingCart from "./ShoppingCart";
import avatar from "../assets/avatar1.png";

function Navbar({ bookInCart, onQuantityChange, onProductRemove, saveCart }) {
  const [isMobile, setIsMobile] = useState(false);
  const [cartsVisibilty, setCartVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <ShoppingCart
        visibilty={cartsVisibilty}
        books={bookInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
        saveCart={saveCart}
      />
      <h1 className="logo">KYU.BookStore</h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link to="/" className="home" onClick={() => setIsMobile(false)}>
          <li className="nav-list">Accueil</li>
        </Link>
        {/* <Link
          to="/listeproduit"
          className="listProduct"
          onClick={() => setIsMobile(false)}
        >
          <li className="nav-list">Blog</li>
        </Link>
        <Link
          to="/ajouteproduit"
          className="add"
          onClick={() => setIsMobile(false)}
        >
          <li className="nav-list">Add Book</li>
        </Link> */}
        <li className="nav-list">
          <button
            type="button"
            className="btn shopping-cart-btn"
            onClick={() => setCartVisible(true)}
          >
            <AiOutlineShoppingCart size={30} />
            {bookInCart.length > 0 && (
              <span className="product-count">{bookInCart.length}</span>
            )}
          </button>
        </li>
        <li className="nav-list">
          <Link to="/transaction">
            {" "}
            <img src={avatar} alt="avatar" className="avatar" />
          </Link>
        </li>
      </ul>

      {/* /* toggle */}
      <button
        type="button"
        className="mobile-menu-icon"
        onClick={toggleMobileMenu}
      >
        {isMobile ? (
          <AiOutlineClose className="faXmark" />
        ) : (
          <FaBars className="FaBars" />
        )}
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  bookInCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onProductRemove: PropTypes.func.isRequired,
  saveCart: PropTypes.func.isRequired,
};

export default Navbar;

// function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-primary-subtle">
//         <div className="container-md">
//           <Link to="/" className="navbar-brand">
//             Rshop
//           </Link>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <Link to="/" className="nav-link active" aria-current="page">
//                 <li className="nav-item">Home</li>
//               </Link>
//               <Link to="/blog" className="nav-link">
//                 <li className="nav-item">Blog</li>
//               </Link>
//               <Link to="/features" className="nav-link">
//                 <li className="nav-item">Features</li>
//               </Link>
//               <Link to="/panier" className="nav-link">
//                 <li className="nav-item">Panier</li>
//               </Link>
//             </ul>
//             <div>
//               <AiOutlineShoppingCart />
//               <GrFavorite />
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
