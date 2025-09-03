// src/pages/admin/CreditIssuance.jsx
import React, { useState } from "react";

export default function CreditIssuance() {
  const [projectId, setProjectId] = useState("");
  const [credits, setCredits] = useState(0);

  const handleIssue = () => {
    alert(`Issued ${credits} credits to project ${projectId} (backend placeholder)`);
    // Example: POST /api/admin/credits { projectId, credits }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Credit Issuance</h1>
      <div className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Project ID"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Number of Credits"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button onClick={handleIssue} className="px-4 py-2 bg-green-600 text-white rounded">
          Issue Credits
        </button>
      </div>
    </div>
  );
}
