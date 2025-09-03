// src/pages/industry/Marketplace.jsx
import React, { useEffect, useState } from "react";

export default function Marketplace() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // ✅ Fetch projects with verified carbon credits from backend
    // fetch("/api/industry/marketplace")
    //   .then(res => res.json())
    //   .then(data => setProjects(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
      <ul className="space-y-2">
        {projects.length === 0 ? (
          <p>No projects available for purchase (backend placeholder)</p>
        ) : (
          projects.map((proj) => (
            <li key={proj.id} className="p-2 border rounded flex justify-between">
              <span>{proj.title} - {proj.credits} credits</span>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">Buy</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
