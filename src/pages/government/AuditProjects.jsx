// src/pages/government/AuditProjects.jsx
import React, { useEffect, useState } from "react";

export default function AuditProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // ✅ Placeholder: fetch all projects for audit
    // fetch("/api/government/projects").then(res => res.json()).then(data => setProjects(data))
  }, []);

  const handleAudit = (id) => {
    alert(`Project ${id} audited (backend placeholder)`);
    // POST /api/government/audit { id }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Audit Projects</h2>
      {projects.length === 0 ? (
        <p>No projects to audit.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((p) => (
            <li key={p.id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <p><strong>{p.name}</strong></p>
                <p>{p.description}</p>
              </div>
              <button onClick={() => handleAudit(p.id)} className="px-3 py-1 bg-blue-600 text-white rounded">
                Audit
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

