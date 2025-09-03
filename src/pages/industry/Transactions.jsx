// src/pages/industry/Transactions.jsx
import React, { useEffect, useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // ✅ Backend/API call placeholder
    // fetch("/api/industry/transactions")
    //   .then(res => res.json())
    //   .then(data => setTransactions(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Transactions</h1>
      <ul className="space-y-2">
        {transactions.length === 0 ? (
          <p>No transactions found (backend placeholder)</p>
        ) : (
          transactions.map((tx) => (
            <li key={tx.id} className="p-2 border rounded">
              {tx.date} - {tx.projectTitle} - {tx.credits} credits
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
