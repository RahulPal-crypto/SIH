// src/pages/industry/Wallet.jsx
import React, { useEffect, useState } from "react";

export default function Wallet() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // ✅ Backend/API call placeholder for wallet balance
    // fetch("/api/industry/wallet")
    //   .then(res => res.json())
    //   .then(data => setBalance(data.balance));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Wallet</h1>
      <p>Current Balance: {balance} credits</p>
      <button className="px-4 py-2 bg-green-600 text-white rounded mt-2">
        Add Funds
      </button>
    </div>
  );
}
