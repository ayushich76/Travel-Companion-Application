import React, { useState } from 'react';
import { Search, MapPin, Utensils, Coffee } from 'lucide-react';



const SearchBar.FC<SearchBarProps> = ({ onSearch, placeholder = "Search for a city..." }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'restaurants' | 'hotels' | 'both'>('both');

  const handleSubmit = (e.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), searchType);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus-2 focus-blue-500 focus-transparent text-lg"
          />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="searchType"
              value="both"
              checked={searchType === 'both'}
              onChange={(e) => setSearchType(e.target.value as any)}
              className="text-blue-600 focus-blue-500"
            />
            <span className="flex items-center space-x-1 text-gray-700">
              <Search className="h-4 w-4" />
              <span>Both</span>
            </span>
          </label>
          
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="searchType"
              value="restaurants"
              checked={searchType === 'restaurants'}
              onChange={(e) => setSearchType(e.target.value as any)}
              className="text-blue-600 focus-blue-500"
            />
            <span className="flex items-center space-x-1 text-gray-700">
              <Utensils className="h-4 w-4" />
              <span>Restaurants</span>
            </span>
          </label>
          
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="searchType"
              value="hotels"
              checked={searchType === 'hotels'}
              onChange={(e) => setSearchType(e.target.value as any)}
              className="text-blue-600 focus-blue-500"
            />
            <span className="flex items-center space-x-1 text-gray-700">
              <Coffee className="h-4 w-4" />
              <span>Hotels</span>
            </span>
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
        >
          <Search className="h-5 w-5" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;