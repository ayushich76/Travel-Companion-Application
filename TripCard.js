import React from 'react';
import { Trip } from '../types';
import { Calendar, MapPin, DollarSign, Clock } from 'lucide-react';



const TripCard.FC<TripCardProps> = ({ trip, onClick }) => {
  const totalExpenses = trip.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const daysUntilTrip = Math.ceil((new Date(trip.startDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'planning''bg-yellow-100 text-yellow-800';
      case 'active''bg-green-100 text-green-800';
      case 'completed''bg-gray-100 text-gray-800';
      default'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover-xl transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={trip.image} 
          alt={trip.destination}
          className="w-full h-full object-cover group-hover-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(trip.status)}`}>
            {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{trip.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{trip.destination}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">
              {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
            </span>
          </div>
          
          {daysUntilTrip > 0 && (
            <div className="flex items-center text-blue-600">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">{daysUntilTrip} days to go</span>
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-1" />
            <span className="text-sm">Budget${trip.budget}</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Spent</div>
            <div className="font-semibold text-orange-600">${totalExpenses}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;