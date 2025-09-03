// src/pages/government/ReportsAnalytics.jsx
import React, { useEffect, useState } from "react";

export default function ReportsAnalytics() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // ✅ Placeholder: fetch reports from backend
    // fetch("/api/government/reports").then(res => res.json()).then(data => setReports(data))
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>
      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <ul className="space-y-4">
          {reports.map((r) => (
            <li key={r.id} className="border p-4 rounded">
              <p><strong>{r.title}</strong></p>
              <p>{r.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
