// src/pages/admin/UserManagement.jsx
import React, { useState, useEffect } from "react";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // ✅ Backend placeholder: fetch all users
    // fetch("/api/admin/users")
    //   .then(res => res.json())
    //   .then(data => setUsers(data));
  }, []);

  const handleBlock = (id) => {
    alert(`User ${id} blocked (backend placeholder)`);
    // POST /api/admin/users/block { id }
  };

  const handleUnblock = (id) => {
    alert(`User ${id} unblocked (backend placeholder)`);
    // POST /api/admin/users/unblock { id }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">User Management</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <p><strong>{user.name}</strong> ({user.role})</p>
                <p>{user.email}</p>
              </div>
              <div className="flex gap-2">
                {user.blocked ? (
                  <button onClick={() => handleUnblock(user.id)} className="px-3 py-1 bg-green-600 text-white rounded">Unblock</button>
                ) : (
                  <button onClick={() => handleBlock(user.id)} className="px-3 py-1 bg-red-600 text-white rounded">Block</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
