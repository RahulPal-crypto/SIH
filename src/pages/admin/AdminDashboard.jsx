// src/pages/admin/AdminDashboard.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/admin" className="hover:bg-gray-700 px-3 py-2 rounded">Dashboard Home</Link>
          <Link to="/admin/project-approval" className="hover:bg-gray-700 px-3 py-2 rounded">Project Approval</Link>
          <Link to="/admin/credit-issuance" className="hover:bg-gray-700 px-3 py-2 rounded">Credit Issuance</Link>
          <Link to="/admin/user-management" className="hover:bg-gray-700 px-3 py-2 rounded">User Management</Link>
          <Link to="/admin/reports" className="hover:bg-gray-700 px-3 py-2 rounded">Reports</Link>
          <Link to="/admin/profile" className="hover:bg-gray-700 px-3 py-2 rounded">Profile</Link>
          <Link to="/admin/settings" className="hover:bg-gray-700 px-3 py-2 rounded">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome, Admin!</h1>
        <p className="mb-4">Use the sidebar to navigate between sections.</p>

        {/* Outlet for nested routing */}
        <Outlet />
      </main>
    </div>
  );
}
