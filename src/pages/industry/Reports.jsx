// src/pages/industry/Reports.jsx
import React, { useEffect, useState } from "react";

export default function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // ✅ Backend/API call placeholder
    // fetch("/api/industry/reports")
    //   .then(res => res.json())
    //   .then(data => setReports(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Reports</h1>
      <ul className="space-y-2">
        {reports.length === 0 ? (
          <p>No reports available (backend placeholder)</p>
        ) : (
          reports.map((report) => (
            <li key={report.id} className="p-2 border rounded">
              {report.title} - {report.status}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
