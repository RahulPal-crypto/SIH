// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import IndustryDashboard from "./pages/IndustryDashboard";
import GovernmentDashboard from "./pages/GovernmentDashboard";
import AddProject from "./pages/AddProject";
import Certificates from "./pages/Certificates";
import Leaderboard from "./pages/Leaderboard";
import ProjectDetails from "./pages/ProjectDetails";
import RoleBasedRedirect from "./components/RoleBasedRedirect";
import OtpVerification from "./pages/OtpVerification";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Standalone routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OtpVerification />} />

          {/* Landing page */}
          <Route path="/" element={<Landing />} />

          {/* Role-based redirect */}
          <Route path="/dashboard" element={<RoleBasedRedirect />} />

          {/* Admin dashboard */}
          <Route
            path="/admin"
            element={
              <Layout showSidebar={true}>
                <AdminDashboard />
              </Layout>
            }
          />

          {/* Government dashboard */}
          <Route
            path="/government"
            element={
              <Layout showSidebar={true}>
                <GovernmentDashboard />
              </Layout>
            }
          />

          {/* Industry dashboard */}
          <Route
            path="/industry"
            element={
              <Layout showSidebar={true}>
                <IndustryDashboard />
              </Layout>
            }
          />

          {/* Community dashboard */}
          <Route
            path="/community"
            element={
              <Layout showSidebar={true}>
                <Dashboard />
              </Layout>
            }
          />

          {/* Community/General pages */}
          <Route
            path="/add-project"
            element={
              <Layout showSidebar={true}>
                <AddProject />
              </Layout>
            }
          />
          <Route
            path="/my-projects"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">My Projects</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
          <Route
            path="/certificates"
            element={
              <Layout showSidebar={true}>
                <Certificates />
              </Layout>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <Layout showSidebar={true}>
                <Leaderboard />
              </Layout>
            }
          />
          <Route
            path="/settings"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Settings</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
          <Route
            path="/project/:id"
            element={
              <Layout showSidebar={true}>
                <ProjectDetails />
              </Layout>
            }
          />

          {/* Industry sub-pages */}
          <Route
            path="/industry/marketplace"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Marketplace</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
          <Route
            path="/industry/transactions"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Transactions</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
          <Route
            path="/industry/wallet"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Wallet</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
          <Route
            path="/industry/reports"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Industry Reports</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />

          {/* Admin sub-pages */}
          <Route
            path="/admin/project-approval"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Project Approval</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
          <Route
            path="/admin/credit-issuance"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Credit Issuance</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
          <Route
            path="/admin/user-management"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">User Management</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
          <Route
            path="/admin/reports"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Admin Reports</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />

          {/* Government sub-pages */}
          <Route
            path="/government/reports"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">
                    Government Reports & Analytics
                  </h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
          <Route
            path="/government/audit-projects"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Audit Projects</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
          <Route
            path="/government/policies"
            element={
              <Layout showSidebar={true}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Policies</h1>
                  <p>Coming soon...</p>
                </div>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}
