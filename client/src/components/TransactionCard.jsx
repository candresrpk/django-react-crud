import React from "react";

const TransactionCard = ({ transaction }) => {
  return (
    <div className="card my-5">
      <h2>{transaction.title}</h2>
      <p>{transaction.category}</p>
      <p>{transaction.amount}</p>
      <p>{transaction.date}</p>
    </div>
  );
};

export default TransactionCard;
