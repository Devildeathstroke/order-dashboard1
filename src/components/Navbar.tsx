import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (

    <nav className={`bg-white shadow-md transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} h-screen fixed left-0 top-0 z-10 flex`}>
  <div className="p-4 flex-grow">
    {isOpen && (
      <>
        <div className="mt-20">
          <ul className="mt-4">
            <li className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer">Dashboard</li>
            <li className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer">Dealerships</li>
            <li className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer">Customers</li>
            <li className="py-2 px-4 bg-blue-100 text-blue-600 rounded cursor-pointer">All Orders</li>
            <li className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer">Employees</li>
          </ul>
        </div>
        <hr className="border-t border-gray-300 my-4" />

        <div className="mt-1">
          <h6>Inventory management</h6>
          <ul className="mt-4">
            <li className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer">Inventory</li>
            <li className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer">Fulfillment request</li>
          </ul>
        </div>
       < hr className="border-t border-gray-300 my-4" />

        <div className="mt-1">
          <h6>Settings</h6>
          <ul className="mt-4">
            <li className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer">Vehicle Directory</li>
            <li className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer">Services Database</li>
          </ul>
        </div>
      </>
    )}
  </div>
  <button 
    onClick={() => setIsOpen(!isOpen)}
    className="absolute top-4 right-[-16px] bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md transition-all"
  >
    {isOpen ? '<' : '>'}
  </button>
</nav>

  );
}