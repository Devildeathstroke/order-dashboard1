'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';


const mockOrders = [
  { date: '23-05-2025', id: 'V-545454', dealership: 'AK Motors', customers: 'Aman Upadhyay', service: 'General Service', Mode: 'Online', status: 'In progress' },
  { date: '22-05-2025', id: 'V-545455', dealership: 'AK Motors', customers: 'Rahul Singh', service: 'Oil Change', Mode: 'Offline', status: 'Completed' },
  { date: '21-05-2025', id: 'V-545456', dealership: 'AK Motors', customers: 'Priya Sharma', service: 'Tire Replacement', Mode: 'Online', status: 'Pending' },
  { date: '20-05-2025', id: 'V-545457', dealership: 'AK Motors', customers: 'John Doe', service: 'General Service', Mode: 'Offline', status: 'In progress' },
];

export default function Home() {
  const [filteredOrders, setFilteredOrders] = useState(mockOrders);
  const [navOpen, setNavOpen] = useState(false);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredOrders(mockOrders);
      return;
    }
  
    const filtered = mockOrders.filter(order =>
      order.customers.toLowerCase().includes(query.toLowerCase()) ||
      order.id.toLowerCase().includes(query.toLowerCase()) ||
      order.service.toLowerCase().includes(query.toLowerCase()) ||
      order.dealership.toLowerCase().includes(query.toLowerCase()) ||
      order.status.toLowerCase().includes(query.toLowerCase())
    );
  
    setFilteredOrders(filtered);
  };

  const handleFilter = (filters) => {
    let filtered = [...mockOrders];

    if (filters.status !== 'all') {
      filtered = filtered.filter(order => order.status.toLowerCase() === filters.status.toLowerCase());
    }

    if (filters.date !== 'all') {
      const now = new Date();
      const today = new Date(now.setHours(0, 0, 0, 0));

      filtered = filtered.filter(order => {
        const [day, month, year] = order.date.split('-').map(Number);
        const orderDate = new Date(year, month - 1, day);

        if (filters.date === 'today') {
          return orderDate.toDateString() === today.toDateString();
        }

        if (filters.date === 'week') {
          const weekStart = new Date(today);
          weekStart.setDate(today.getDate() - today.getDay());
          return orderDate >= weekStart;
        }

        if (filters.date === 'month') {
          return orderDate.getMonth() === today.getMonth() && orderDate.getFullYear() === today.getFullYear();
        }

        if (filters.date === 'year') {
          return orderDate.getFullYear() === today.getFullYear();
        }

        return true;
      });
    }

    if (filters.service && filters.service !== 'all') {
      filtered = filtered.filter(order => order.service.toLowerCase() === filters.service.toLowerCase());
    }

    if (filters.mode && filters.mode !== 'all') {
      filtered = filtered.filter(order => order.Mode.toLowerCase() === filters.mode.toLowerCase());
    }

    setFilteredOrders(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="w-full flex justify-end items-center pt-4 pr-4">
        <div className="mr-4 text-gray-700 cursor-pointer">🔔</div>
        <div className="text-gray-700 cursor-pointer">AK Motors</div>
      </div>

      <hr className="border-t border-gray-300 my-4" />

      <main className="transition-all duration-300 ml-0 md:ml-64 p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <button onClick={() => setNavOpen(true)} className="md:hidden mr-4 text-gray-700">☰</button>
            <h2 className="text-2xl font-bold">All Orders</h2>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
            <div className="w-full md:w-auto">
              <FilterPanel onFilter={handleFilter} />
            </div>
            <div className="w-full md:w-1/3">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dealership</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.dealership}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.customers}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.Mode}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}




