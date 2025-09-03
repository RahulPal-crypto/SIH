import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Building2, Factory, ShieldCheck } from "lucide-react"; // icons
import { useUser } from "../context/UserContext";

export default function Login() {
  const [mode, setMode] = useState("email"); // "email" | "phone"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // ✅ role button selection

  const navigate = useNavigate();
  const { setRole } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();

    if (mode === "email") {
      if (!(email && password)) {
        alert("Please enter email and password ❌");
        return;
      }
    } else {
      if (!(phone && otp)) {
        alert("Please enter phone number and OTP ❌");
        return;
      }
    }

    if (!selectedRole) {
      alert("⚠️ Please select your role before login");
      return;
    }

    localStorage.setItem("role", selectedRole);
    setRole(selectedRole);

    alert("Login successful ✅");

    if (selectedRole === "admin") {
      navigate("/admin");
    } else if (selectedRole === "government") {
      navigate("/government");
    } else if (selectedRole === "industry") {
      navigate("/industry");
    } else {
      navigate("/community");
    }
  };

  const handleGoogleLogin = () => {
    if (!selectedRole) {
      alert("⚠️ Please select your role before Google login");
      return;
    }

    localStorage.setItem("role", selectedRole);
    setRole(selectedRole);
    alert("Google login clicked ✅");

    if (selectedRole === "admin") {
      navigate("/admin");
    } else if (selectedRole === "government") {
      navigate("/government");
    } else if (selectedRole === "industry") {
      navigate("/industry");
    } else {
      navigate("/community");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-blue-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl flex overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            Welcome back
          </h2>
          <p className="text-sm text-gray-500 mb-6">Secure & Private</p>

          {/* Mode Switch */}
          <div className="flex mb-6 bg-gray-100 rounded-lg overflow-hidden">
            <button
              onClick={() => setMode("email")}
              className={`flex-1 py-2 font-medium ${
                mode === "email"
                  ? "bg-teal-600 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Email Login
            </button>
            <button
              onClick={() => setMode("phone")}
              className={`flex-1 py-2 font-medium ${
                mode === "phone"
                  ? "bg-teal-600 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Phone Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {mode === "email" ? (
              <>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </>
            ) : (
              <>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    className="px-4 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:scale-105 transition"
                    onClick={() => alert("OTP sent ✅")}
                  >
                    Send OTP
                  </button>
                </div>
              </>
            )}

            {/* Role Selection - Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole("community")}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-medium ${
                  selectedRole === "community"
                    ? "bg-green-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Users size={18} /> Community
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("government")}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-medium ${
                  selectedRole === "government"
                    ? "bg-green-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Building2 size={18} /> Government
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("industry")}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-medium ${
                  selectedRole === "industry"
                    ? "bg-green-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Factory size={18} /> Industry
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("admin")}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-medium ${
                  selectedRole === "admin"
                    ? "bg-green-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <ShieldCheck size={18} /> Admin
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-teal-600 text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center py-3 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          <p className="text-center text-gray-600 text-sm mt-6">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </button>
          </p>
        </div>

        {/* Right Side - Info */}
        <div className="hidden md:flex flex-col justify-center w-1/2 bg-gray-50 p-10">
          <h2 className="text-3xl font-bold mb-4">
            Track carbon. <br />
            Plant trees. <br />
            Restore ecosystems.
          </h2>
          <p className="text-gray-600 mb-6">
            Choose your role to get started. Communities upload plantations,
            NGOs verify and monitor, industries buy carbon credits, and admins
            keep everything compliant.
          </p>
          <ul className="text-gray-700 space-y-2 text-sm">
            <li>
              • Community: Upload plantation details with photos & location
            </li>
            <li>• NGO: Verify submissions, monitor growth</li>
            <li>• Industry: Buy verified carbon credits</li>
            <li>• Admin: Ensure compliance & manage the system</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
