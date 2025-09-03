import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function RoleBasedRedirect() {
  const { role } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) return; // no role yet → do nothing
    if (role === "admin") navigate("/admin");
    else if (role === "government") navigate("/government");
    else if (role === "industry") navigate("/industry");
    else navigate("/community");
  }, [role, navigate]);

  return <div>Redirecting...</div>; // safe fallback
}
