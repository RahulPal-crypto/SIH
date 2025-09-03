// src/pages/admin/Settings.jsx
import React, { useState } from "react";

export default function Settings() {
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleUpdate = () => {
    // ✅ Backend/API placeholder
    alert("Admin settings updated (backend placeholder)");
    // Example: POST /api/admin/settings { password, notifications }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Settings</h1>

      <div className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Change Password</label>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          <label>Enable Notifications</label>
        </div>

        <button
          onClick={handleUpdate}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
