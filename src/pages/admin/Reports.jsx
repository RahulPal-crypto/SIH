// src/pages/admin/Reports.jsx
import React, { useState, useEffect } from "react";

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // ✅ Backend placeholder: fetch admin reports
    // fetch("/api/admin/reports")
    //   .then(res => res.json())
    //   .then(data => setReports(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Reports</h1>
      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <ul className="space-y-4">
          {reports.map((report) => (
            <li key={report.id} className="border p-4 rounded">
              <p><strong>{report.title}</strong></p>
              <p>{report.description}</p>
              <p>Status: {report.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
