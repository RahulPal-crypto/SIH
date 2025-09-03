// src/pages/dashboard/MyProjects.jsx
import React, { useEffect, useState } from "react";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // ✅ Backend/API call placeholder
    // fetch("/api/projects/my")
    //   .then(res => res.json())
    //   .then(data => setProjects(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <ul className="space-y-2">
        {projects.length === 0 ? (
          <p>No projects found (backend placeholder)</p>
        ) : (
          projects.map((proj) => (
            <li key={proj.id} className="p-2 border rounded">
              {proj.title}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
