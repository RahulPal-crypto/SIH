import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Building2, Factory, ShieldCheck } from "lucide-react";
import { useUser } from "../context/UserContext";
import { useNotification } from "../context/NotificationContext";

export default function Register() {
  const [mode, setMode] = useState("email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const { setRole: setUserRole } = useUser();
  const { addNotification } = useNotification();

  const redirectToDashboard = (role) => {
    // Redirect **directly to dashboard folders**
    switch (role) {
      case "community":
        navigate("/community"); // Community dashboard folder
        break;
      case "industry":
        navigate("/industry"); // Industry dashboard folder
        break;
      case "admin":
        navigate("/admin"); // Admin dashboard folder
        break;
      case "government":
      case "ngo": // make sure "ngo" role maps to government
        navigate("/government"); // Government dashboard folder
        break;
      default:
        navigate("/");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!role) return addNotification("⚠️ Please select your role", "error");

    // Store role in context & localStorage
    setUserRole(role);
    localStorage.setItem("role", role);

    if (mode === "email") {
      if (!name || !email || !password)
        return addNotification("Please fill all fields ❌", "error");
    } else {
      if (!name || !phone || !otp)
        return addNotification("Please enter phone number and OTP ❌", "error");
    }

    addNotification(`Registration successful ✅ as ${role}`, "success");
    redirectToDashboard(role); // ✅ direct folder redirect
  };

  const handleGoogleRegister = () => {
    if (!role) return addNotification("⚠️ Please select your role", "error");
    setUserRole(role);
    localStorage.setItem("role", role);
    addNotification(`Google Sign-up clicked ✅ as ${role}`, "success");
    redirectToDashboard(role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-green-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl flex overflow-hidden">
        {/* Left Side Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            Create an Account ✨
          </h2>
          <p className="text-gray-600 mb-6">
            Join the{" "}
            <span className="font-semibold text-blue-600">
              Blue Carbon Registry
            </span>
          </p>

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
              Email Register
            </button>
            <button
              onClick={() => setMode("phone")}
              className={`flex-1 py-2 font-medium ${
                mode === "phone"
                  ? "bg-teal-600 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Phone Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
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
                  placeholder="Create a strong password"
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
                    onClick={() => addNotification("OTP sent ✅", "success")}
                  >
                    Send OTP
                  </button>
                </div>
              </>
            )}

            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("community")}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-medium ${
                  role === "community"
                    ? "bg-green-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Users size={18} /> Community
              </button>
              <button
                type="button"
                onClick={() => setRole("ngo")}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-medium ${
                  role === "ngo"
                    ? "bg-green-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Building2 size={18} /> Government
              </button>
              <button
                type="button"
                onClick={() => setRole("industry")}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-medium ${
                  role === "industry"
                    ? "bg-green-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Factory size={18} /> Industry
              </button>
              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border font-medium ${
                  role === "admin"
                    ? "bg-green-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <ShieldCheck size={18} /> Admin
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-teal-600 text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Register
            </button>
          </form>

          {/* Google Register */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <button
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center py-3 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>

          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </button>
          </p>
        </div>

        {/* Right Side Info */}
        <div className="hidden md:flex flex-col justify-center w-1/2 bg-gray-50 p-10">
          <h2 className="text-3xl font-bold mb-4">
            Register & Contribute. <br />
            Verify. Buy Credits. <br />
            Manage the System.
          </h2>
          <p className="text-gray-600 mb-6">
            Choose your role to join the mission. Communities upload
            plantations, NGOs verify & monitor, industries buy carbon credits,
            and admins keep everything compliant.
          </p>
        </div>
      </div>
    </div>
  );
}
