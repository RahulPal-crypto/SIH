// src/pages/admin/ProjectApproval.jsx
import React, { useState, useEffect } from "react";

export default function ProjectApproval() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // ✅ Backend placeholder: fetch pending projects
    // fetch("/api/admin/projects/pending")
    //   .then(res => res.json())
    //   .then(data => setProjects(data));
  }, []);

  const handleApprove = (id) => {
    alert(`Project ${id} approved (backend placeholder)`);
    // Example: POST /api/admin/projects/approve { id }
  };

  const handleReject = (id) => {
    alert(`Project ${id} rejected (backend placeholder)`);
    // Example: POST /api/admin/projects/reject { id }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Project Approval</h1>
      {projects.length === 0 ? (
        <p>No pending projects.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <p><strong>{project.name}</strong></p>
                <p>{project.description}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleApprove(project.id)} className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
                <button onClick={() => handleReject(project.id)} className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
