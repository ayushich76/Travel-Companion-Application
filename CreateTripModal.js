import React, { useState } from 'react';
import { X, Calendar, MapPin, DollarSign } from 'lucide-react';
import { Trip } from '../types';



const CreateTripModal.FC<CreateTripModalProps> = ({ isOpen, onClose, onCreateTrip }) => {
  const [formData, setFormData] = useState({
    title'',
    destination'',
    startDate'',
    endDate'',
    budget''
  });

  const handleSubmit = (e.FormEvent) => {
    e.preventDefault();
    
    if (formData.title && formData.destination && formData.startDate && formData.endDate && formData.budget) {
      const newTrip'id'> = {
        title.title,
        destination.destination,
        startDate.startDate,
        endDate.endDate,
        budget(formData.budget),
        expenses
        itinerary
        packingList
        documents
        status'planning',
        image'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg'
      };
      
      onCreateTrip(newTrip);
      setFormData({ title'', destination'', startDate'', endDate'', budget'' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Create New Trip</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trip Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
              placeholder="e.g., Tokyo Adventure"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination.target.value})}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
                placeholder="e.g., Tokyo, Japan"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="number"
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget.target.value})}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
                placeholder="2500"
                required
              />
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover-blue-700 transition-colors"
            >
              Create Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTripModal;