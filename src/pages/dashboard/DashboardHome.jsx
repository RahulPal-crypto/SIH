// src/pages/dashboard/DashboardHome.jsx
import React, { useEffect, useState } from "react";

export default function DashboardHome() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    verifiedCertificates: 0,
  });

  // ✅ Placeholder for backend/API call
  useEffect(() => {
    // Example: fetch stats from backend
    // fetch("/api/community/stats")
    //   .then(res => res.json())
    //   .then(data => setStats(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Community / NGO Dashboard</h1>
      <p>Total Projects Submitted: {stats.totalProjects}</p>
      <p>Verified Certificates: {stats.verifiedCertificates}</p>
    </div>
  );
}
