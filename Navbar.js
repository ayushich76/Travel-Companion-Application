import React from 'react';
import { Plane, Map, DollarSign, Package, FileText, Compass, Search } from 'lucide-react';



const Navbar.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id'trips', label'My Trips', icon},
    { id'search', label'Search', icon},
    { id'destinations', label'Destinations', icon},
    { id'expenses', label'Expenses', icon},
    { id'packing', label'Packing', icon},
    { id'documents', label'Documents', icon}
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Map className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">TravelCompanion</span>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      'text-gray-600 hover-gray-100 hover-gray-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;