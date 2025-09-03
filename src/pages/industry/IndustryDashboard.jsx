// src/pages/industry/IndustryDashboard.jsx
import React, { useEffect, useState } from "react";

export default function IndustryDashboard() {
  const [overview, setOverview] = useState({
    totalCredits: 0,
    purchasedCredits: 0,
  });

  useEffect(() => {
    // ✅ Backend/API call placeholder
    // fetch("/api/industry/overview")
    //   .then(res => res.json())
    //   .then(data => setOverview(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Industry Dashboard</h1>
      <p>Total Available Credits: {overview.totalCredits}</p>
      <p>Purchased Credits: {overview.purchasedCredits}</p>
    </div>
  );
}
