import React, { useEffect, useState } from "react";
import { getAllTransactions } from "../api/transactionsApi";
import TransactionCard from "./TransactionCard";

const TransactionsList = () => {
  async function fetchData() {
    const { data } = await getAllTransactions();
    setTransactions(data);
  }

  const [Transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Transactions</h1>
      {Transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionsList;
