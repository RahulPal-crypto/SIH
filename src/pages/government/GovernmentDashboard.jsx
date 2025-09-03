// src/pages/government/GovernmentDashboard.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function GovernmentDashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Government Panel</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/government" className="hover:bg-blue-700 px-3 py-2 rounded">Dashboard Home</Link>
          <Link to="/government/reports-analytics" className="hover:bg-blue-700 px-3 py-2 rounded">Reports & Analytics</Link>
          <Link to="/government/audit-projects" className="hover:bg-blue-700 px-3 py-2 rounded">Audit Projects</Link>
          <Link to="/government/policies" className="hover:bg-blue-700 px-3 py-2 rounded">Policies</Link>
          <Link to="/government/profile" className="hover:bg-blue-700 px-3 py-2 rounded">Profile</Link>
          <Link to="/government/settings" className="hover:bg-blue-700 px-3 py-2 rounded">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome, Government User!</h1>
        <p className="mb-4">Use the sidebar to navigate between sections.</p>

        {/* Outlet for nested routing */}
        <Outlet />
      </main>
    </div>
  );
}
