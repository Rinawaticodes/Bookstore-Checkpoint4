import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Landing from "./pages/Landing";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
