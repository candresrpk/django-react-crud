import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTransaction } from "../api/transactionsApi";

const TransactionCard = ({ transaction }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    window.location.reload();
  };

  return (
    <div className="card my-5">
      <h2>{transaction.title}</h2>
      <p>{transaction.category}</p>
      <p>{transaction.amount}</p>
      <p>{transaction.date}</p>

      <button onClick={() => handleDelete(transaction.id)}>Delete</button>
      <button onClick={() => navigate(`/transaction/${transaction.id}/`)}>
        update
      </button>
    </div>
  );
};

export default TransactionCard;
