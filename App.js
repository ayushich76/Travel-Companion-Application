import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Navbar from './components/Navbar';
import TripCard from './components/TripCard';
import TripDetail from './components/TripDetail';
import DestinationCard from './components/DestinationCard';
import CreateTripModal from './components/CreateTripModal';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import { mockTrips, mockDestinations, mockRestaurants, mockHotels } from './data/mockData';
import { Trip, Restaurant, Hotel } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('trips');
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [trips, setTrips] = useState<Trip[]>(mockTrips);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'restaurants' | 'hotels' | 'both'>('both');
  const [searchResults, setSearchResults] = useState<{
    restaurants;
    hotels;
  }>({ restaurants});

  const handleCreateTrip = (newTripData'id'>) => {
    const newTrip= {
      ...newTripData,
      id.now().toString()
    };
    setTrips([...trips, newTrip]);
  };

  const handleUpdateTrip = (updatedTrip) => {
    setTrips(trips.map(trip => trip.id === updatedTrip.id ? updatedTrip ));
    setSelectedTrip(updatedTrip);
  };

  const handleSearch = (query'restaurants' | 'hotels' | 'both') => {
    setSearchQuery(query);
    setSearchType(type);
    
    const cityKey = query.toLowerCase();
    const restaurants = mockRestaurants[cityKey] || [];
    const hotels = mockHotels[cityKey] || [];
    
    setSearchResults({ restaurants, hotels });
  };

  if (selectedTrip) {
    return (
      <TripDetail 
        trip={selectedTrip} 
        onBack={() => setSelectedTrip(null)}
        onUpdateTrip={handleUpdateTrip}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'trips' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">My Trips</h1>
                <p className="text-gray-600 mt-1">Plan and manage your adventures</p>
              </div>
              <button 
                onClick={() => setIsCreateModalOpen(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover-blue-700 transition-all shadow-lg hover-xl"
              >
                <Plus className="h-5 w-5" />
                <span>New Trip</span>
              </button>
            </div>

            {trips.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Plus className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No trips yet</h3>
                <p className="text-gray-600 mb-6">Start planning your next adventure!</p>
                <button 
                  onClick={() => setIsCreateModalOpen(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover-blue-700 transition-colors"
                >
                  Create Your First Trip
                </button>
              </div>
            ) (
              <div className="grid grid-cols-1 md-cols-2 lg-cols-3 gap-6">
                {trips.map((trip) => (
                  <TripCard 
                    key={trip.id} 
                    trip={trip} 
                    onClick={() => setSelectedTrip(trip)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'search' && (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Search Restaurants & Hotels</h1>
              <p className="text-gray-600 mt-1">Find the best dining and accommodation options in any city</p>
            </div>

            <SearchBar onSearch={handleSearch} />
            <SearchResults 
              restaurants={searchResults.restaurants}
              hotels={searchResults.hotels}
              searchQuery={searchQuery}
              searchType={searchType}
            />
          </div>
        )}

        {activeTab === 'destinations' && (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Discover Destinations</h1>
              <p className="text-gray-600 mt-1">Explore amazing places around the world</p>
            </div>

            <div className="grid grid-cols-1 md-cols-2 lg-cols-3 gap-6">
              {mockDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'expenses' || activeTab === 'packing' || activeTab === 'documents') && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {activeTab === 'expenses' && 'Expense Management'}
              {activeTab === 'packing' && 'Packing Lists'}
              {activeTab === 'documents' && 'Travel Documents'}
            </h2>
            <p className="text-gray-600 mb-6">
              {activeTab === 'expenses' && 'Track your travel expenses across all trips'}
              {activeTab === 'packing' && 'Manage packing lists for all your trips'}
              {activeTab === 'documents' && 'Store and organize your travel documents'}
            </p>
            <p className="text-sm text-blue-600">
              Select a trip to manage {activeTab === 'expenses' ? 'expenses' === 'packing' ? 'packing lists' 'documents'}
            </p>
          </div>
        )}
      </main>

      <CreateTripModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateTrip={handleCreateTrip}
      />
    </div>
  );
}

export default App;