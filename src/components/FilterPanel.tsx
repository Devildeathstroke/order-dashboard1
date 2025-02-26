import { useState } from "react";

export default function FilterPanel({ onFilter }) {
  const [filters, setFilters] = useState({
    dealership: "all",
    service: "all",
    mode: "all",
    status: "all",
    search: "",
  });

  const handleFilterChange = (name: string, value: string) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="bg-white rounded-md mb-4">
      <div className="flex flex-wrap gap-4 items-center">
        Filter by:
        <div className="flex flex-col">
          <label className="font-medium mb-1">Dealership</label>
          <select
            value={filters.dealership}
            onChange={(e) => handleFilterChange("dealership", e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="ak motors">AK Motors</option>
            <option value="sr motors">SR Motors</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Service Type</label>
          <select
            value={filters.service}
            onChange={(e) => handleFilterChange("service", e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="general service">General Service</option>
            <option value="express service">Express Service</option>
            <option value="quick fix">Quick Fix</option>
            <option value="bike inspection">Bike Inspection</option>
            <option value="bike care">Bike Care</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Mode of Order</label>
          <select
            value={filters.mode}
            onChange={(e) => handleFilterChange("mode", e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Order Status</label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange("status", e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}

