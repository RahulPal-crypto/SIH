// src/pages/admin/Profile.jsx
import React, { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "Admin",
  });

  useEffect(() => {
    // ✅ Backend/API placeholder
    // fetch("/api/admin/profile")
    //   .then(res => res.json())
    //   .then(data => setUser(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Profile</h1>
      <p><strong>Name:</strong> {user.name || "John Admin"}</p>
      <p><strong>Email:</strong> {user.email || "admin@example.com"}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}
