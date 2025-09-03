// src/pages/government/Settings.jsx
import React, { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert(`Settings saved. Notifications: ${notifications}`);
    // POST /api/government/settings { notifications }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
          className="w-4 h-4"
        />
        Enable Notifications
      </label>
      <button onClick={handleSave} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Save Settings
      </button>
    </div>
  );
}
