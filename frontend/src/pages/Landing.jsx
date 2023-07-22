import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import Carrousel from "../components/Carrousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BestSeller from "../components/BestSeller";

function Landing() {
  const [bookInCart, setBookInCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(bookInCart));
  }, [bookInCart]);

  const addBookToCart = (book) => {
    const newBook = {
      ...book,
      count: 1,
    };
    setBookInCart([...bookInCart, newBook]);
  };

  // const onQuantityChange = (productId, count) => {
  //   setBookInCart((oldState) => {
  //     const productsIndex = oldState.findIndex((item) => item.id === productId);
  //     if (productsIndex !== -1) {
  //       oldState[productsIndex].count = count;
  //     }
  //     return [...oldState];
  //   });
  // };

  /* this is for cart shopping */

  const onQuantityChange = (productId, count) => {
    setBookInCart((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        // eslint-disable-next-line no-param-reassign
        oldState[productsIndex].count = parseInt(count, 10);
      }
      return [...oldState];
    });
  };

  const saveCart = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"}/carts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookInCart),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.info("Le panier a été envoyé");
        } else {
          console.info("Erreur lors de la sauvegarde du panier.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête", error);
      });
  };

  const onProductRemove = (product) => {
    setBookInCart((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  return (
    <div className="landing">
      <Navbar
        bookInCart={bookInCart}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
        saveCart={saveCart}
      />
      <Carrousel />
      <BestSeller />
      <BookList addBookToCart={addBookToCart} />
      <Footer />
    </div>
  );
}

export default Landing;
