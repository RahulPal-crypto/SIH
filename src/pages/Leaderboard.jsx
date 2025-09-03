import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { getProjects } from "../store/projects";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";

// A reusable component for each project's ranking card
function RankingCard({ project, rank }) {
  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return "bg-yellow-400";
      case 2:
        return "bg-gray-400";
      case 3:
        return "bg-amber-600";
      default:
        return "bg-blue-600";
    }
  };

  const getRankBadge = (rank) => {
    switch (rank) {
      case 1:
        return "Champion";
      case 2:
        return "Expert";
      case 3:
        return "Rising Star";
      default:
        return "Contributor";
    }
  };

  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${getRankColor(rank)}`}>
          {rank}
        </div>
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(project.name)}&background=random`}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            <Link to={`/project/${project.id}`} className="hover:underline">
              {project.name}
            </Link>
          </h3>
          <span className="text-sm font-medium text-gray-600">
            {project.location} • {getRankBadge(rank)}
          </span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-3xl font-bold text-green-600">{project.predictedCO2}</div>
        <div className="text-sm text-gray-500">{project.sizeHa} ha</div>
      </div>
    </div>
  );
}

export default function Leaderboard() {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({ region: "All", risk: "All", type: "All" });
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const regions = ["All", ...new Set(projects.map(p => p.location))];
  const risks = ["All", "Low", "Medium", "High"];
  const types = ["All", ...new Set(projects.map(p => p.type))];

  const filteredProjects = useMemo(() => {
    return projects.filter(p =>
      (filters.region === "All" || p.location === filters.region) &&
      (filters.risk === "All" || p.riskLevel === filters.risk) &&
      (filters.type === "All" || p.type === filters.type)
    );
  }, [projects, filters]);

  const sorted = useMemo(() => {
    const sortedCopy = [...filteredProjects].sort((a, b) => (b.predictedCO2 || 0) - (a.predictedCO2 || 0));
    if (sortAsc) sortedCopy.reverse();
    return sortedCopy;
  }, [filteredProjects, sortAsc]);

  const renderFilterPill = (label, options, key) => (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-gray-700">{label}:</span>
      <div className="flex items-center gap-2">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => setFilters(prev => ({ ...prev, [key]: opt }))}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 ${
              filters[key] === opt
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Global Leaderboard
        </h1>
        <p className="text-lg text-gray-500 mt-1">
          Top performers in blue carbon conservation
        </p>

        {/* Filter Section */}
        <div className="mt-8 p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Filters</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {renderFilterPill("Region", regions, "region")}
            {renderFilterPill("Risk", risks, "risk")}
            {renderFilterPill("Type", types, "type")}
          </div>
        </div>

        {/* Rankings Section */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rankings</h2>
          <div className="space-y-4">
            {sorted.length > 0 ? (
              sorted.map((p, i) => (
                <RankingCard key={p.id} project={p} rank={i + 1} />
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                No projects found for the selected filters.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}