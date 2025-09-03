// src/pages/government/Policies.jsx
import React, { useState, useEffect } from "react";

export default function Policies() {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    // ✅ Placeholder: fetch policies from backend
    // fetch("/api/government/policies").then(res => res.json()).then(data => setPolicies(data))
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Policies</h2>
      {policies.length === 0 ? (
        <p>No policies available.</p>
      ) : (
        <ul className="space-y-4">
          {policies.map((policy) => (
            <li key={policy.id} className="border p-4 rounded">
              <p><strong>{policy.title}</strong></p>
              <p>{policy.details}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
