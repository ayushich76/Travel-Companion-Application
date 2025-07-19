import React from 'react';
import { Destination } from '../types';
import { MapPin, Thermometer, Calendar, DollarSign } from 'lucide-react';



const DestinationCard.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover group-hover-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold">{destination.name}</h3>
          <p className="flex items-center text-sm opacity-90">
            <MapPin className="h-4 w-4 mr-1" />
            {destination.country}
          </p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-start">
            <Calendar className="h-4 w-4 mr-2 mt-1 text-blue-600" />
            <div>
              <div className="text-sm font-medium text-gray-800">Best Time</div>
              <div className="text-sm text-gray-600">{destination.bestTimeToVisit}</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <Thermometer className="h-4 w-4 mr-2 mt-1 text-orange-600" />
            <div>
              <div className="text-sm font-medium text-gray-800">Climate</div>
              <div className="text-sm text-gray-600">{destination.averageTemp}</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <DollarSign className="h-4 w-4 mr-2 mt-1 text-green-600" />
            <div>
              <div className="text-sm font-medium text-gray-800">Currency</div>
              <div className="text-sm text-gray-600">{destination.currency}</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-4 h-4 mr-2 mt-1 bg-purple-600 rounded-full flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-gray-800">Language</div>
              <div className="text-sm text-gray-600">{destination.language}</div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Top Attractions</h4>
          <div className="flex flex-wrap gap-2">
            {destination.attractions.slice(0, 3).map((attraction, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
              >
                {attraction}
              </span>
            ))}
            {destination.attractions.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                +{destination.attractions.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;