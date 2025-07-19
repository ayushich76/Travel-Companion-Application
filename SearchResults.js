import React, { useState } from 'react';
import { Restaurant, Hotel } from '../types';
import { Star, MapPin, Phone, Clock, Wifi, Car, Coffee, Utensils, DollarSign } from 'lucide-react';



const SearchResults.FC<SearchResultsProps> = ({ restaurants, hotels, searchQuery, searchType }) => {
  const [activeTab, setActiveTab] = useState<'restaurants' | 'hotels'>(
    searchType === 'both' ? 'restaurants' 
  );

  const getPriceRangeSymbol = (range) => {
    return range;
  };

  const renderStars = (rating) => {
    return Array.from({ length}, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' 'text-gray-300'
        }`}
      />
    ));
  };

  const RestaurantCard.FC<{ restaurant}> = ({ restaurant }) => (
    <div className="bg-white rounded-xl shadow-md hover-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover hover-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-sm font-medium text-green-600">
            {getPriceRangeSymbol(restaurant.priceRange)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
          <div className="flex items-center space-x-1">
            {renderStars(restaurant.rating)}
            <span className="text-sm text-gray-600 ml-1">{restaurant.rating}</span>
          </div>
        </div>
        
        <p className="text-blue-600 font-medium mb-2">{restaurant.cuisine}</p>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{restaurant.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{restaurant.address}</span>
          </div>
          
          {restaurant.phone && (
            <div className="flex items-center text-gray-600 text-sm">
              <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{restaurant.phone}</span>
            </div>
          )}
          
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{restaurant.openHours}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {restaurant.features.map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const HotelCard.FC<{ hotel}> = ({ hotel }) => (
    <div className="bg-white rounded-xl shadow-md hover-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.name}
          className="w-full h-full object-cover hover-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
          <div className="text-lg font-bold text-green-600">${hotel.pricePerNight}</div>
          <div className="text-xs text-gray-600">per night</div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
          <div className="flex items-center space-x-1">
            {renderStars(hotel.rating)}
            <span className="text-sm text-gray-600 ml-1">{hotel.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{hotel.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{hotel.address}</span>
          </div>
          
          {hotel.phone && (
            <div className="flex items-center text-gray-600 text-sm">
              <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{hotel.phone}</span>
            </div>
          )}
          
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Check-in{hotel.checkIn} | Check-out{hotel.checkOut}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Room Types</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.roomTypes.slice(0, 2).map((room, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
              >
                {room}
              </span>
            ))}
            {hotel.roomTypes.length > 2 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                +{hotel.roomTypes.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.slice(0, 3).map((amenity, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium"
              >
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                +{hotel.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (!searchQuery) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <Utensils className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Search for restaurants and hotels</h3>
        <p className="text-gray-600">Enter a city name to discover amazing dining and accommodation options</p>
      </div>
    );
  }

  const hasResults = restaurants.length > 0 || hotels.length > 0;

  if (!hasResults) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <MapPin className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
        <p className="text-gray-600">
          We couldn't find any {searchType === 'both' ? 'restaurants or hotels' } in "{searchQuery}".
          Try searching for a different city.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Results for "{searchQuery}"
        </h2>
        <p className="text-gray-600">
          Found {restaurants.length} restaurants and {hotels.length} hotels
        </p>
      </div>

      {searchType === 'both' && (
        <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('restaurants')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
              activeTab === 'restaurants'
                ? 'bg-white text-blue-600 shadow-sm'
                'text-gray-600 hover-gray-800'
            }`}
          >
            <Utensils className="h-4 w-4" />
            <span>Restaurants ({restaurants.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
              activeTab === 'hotels'
                ? 'bg-white text-blue-600 shadow-sm'
                'text-gray-600 hover-gray-800'
            }`}
          >
            <Coffee className="h-4 w-4" />
            <span>Hotels ({hotels.length})</span>
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md-cols-2 lg-cols-3 gap-6">
        {(searchType === 'restaurants' || (searchType === 'both' && activeTab === 'restaurants')) &&
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        
        {(searchType === 'hotels' || (searchType === 'both' && activeTab === 'hotels')) &&
          hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
      </div>
    </div>
  );
};

export default SearchResults;