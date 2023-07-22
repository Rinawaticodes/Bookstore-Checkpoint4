import React, { useState, useEffect } from "react";
import "../App.css";

function Transaction() {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6001"}/carts`
    )
      .then((response) => response.json())
      .then((data) => setHistories(data));
  }, []);

  return (
    <div className="history">
      <h1>List de Transaction</h1>

      {histories.map((history) => (
        <table className="table">
          <tr key={history.id} className="table1">
            <th className="table-column">Transaction_id</th>
            <th className="table-column">Book Id</th>
            <th className="table-column">Quantity</th>
            <th className="table-column">Total_price</th>
            <th className="table-column">Date</th>
          </tr>

          <tr key={history.id} className="table1">
            <td className="table-row">{history.cart_id}</td>
            <td className="table-row">{history.book_id}</td>
            <td className="table-row">{history.quantity}</td>
            <td className="table-row">{history.total_price} €</td>
            <td className="table-row">{history.transaction}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default Transaction;
