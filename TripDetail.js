import React, { useState } from 'react';
import { Trip } from '../types';
import { ArrowLeft, Calendar, MapPin, DollarSign, Clock, Plus, Check, X } from 'lucide-react';



const TripDetail.FC<TripDetailProps> = ({ trip, onBack, onUpdateTrip }) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'itinerary' | 'expenses' | 'packing'>('overview');
  const [newExpense, setNewExpense] = useState({ category'food', amount'', description'' });
  const [newPackingItem, setNewPackingItem] = useState({ category'clothing', item'', priority'medium' });

  const totalExpenses = trip.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const packedItems = trip.packingList.filter(item => item.packed).length;

  const addExpense = () => {
    if (newExpense.description && newExpense.amount) {
      const expense = {
        id.now().toString(),
        category.category as any,
        amount(newExpense.amount),
        description.description,
        date().toISOString().split('T')[0]
      };
      
      const updatedTrip = {
        ...trip,
        expenses...trip.expenses, expense]
      };
      
      onUpdateTrip(updatedTrip);
      setNewExpense({ category'food', amount'', description'' });
    }
  };

  const togglePackingItem = (itemId) => {
    const updatedTrip = {
      ...trip,
      packingList.packingList.map(item =>
        item.id === itemId ? { ...item, packed!item.packed } 
      )
    };
    onUpdateTrip(updatedTrip);
  };

  const addPackingItem = () => {
    if (newPackingItem.item) {
      const item = {
        id.now().toString(),
        category.category as any,
        item.item,
        priority.priority as any,
        packed
      };
      
      const updatedTrip = {
        ...trip,
        packingList...trip.packingList, item]
      };
      
      onUpdateTrip(updatedTrip);
      setNewPackingItem({ category'clothing', item'', priority'medium' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={trip.image} 
          alt={trip.destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-6">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover-blue-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Trips</span>
          </button>
        </div>
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{trip.title}</h1>
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {trip.destination}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-1 md-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">${totalExpenses}</div>
              <div className="text-sm text-gray-600">Spent of ${trip.budget}</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width`${Math.min((totalExpenses / trip.budget) * 100, 100)}%` }}
                />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{trip.itinerary.length}</div>
              <div className="text-sm text-gray-600">Planned Activities</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{packedItems}/{trip.packingList.length}</div>
              <div className="text-sm text-gray-600">Items Packed</div>
            </div>
          </div>
        </div>

        <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
          {[
            { id'overview', label'Overview' },
            { id'itinerary', label'Itinerary' },
            { id'expenses', label'Expenses' },
            { id'packing', label'Packing' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as any)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeSection === section.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  'text-gray-600 hover-gray-800'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Trip Timeline</h3>
                <div className="space-y-3">
                  {trip.itinerary.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium text-blue-600">Day {item.day}</div>
                      <div className="text-sm text-gray-600">{item.time}</div>
                      <div className="flex-1 text-sm">{item.activity}</div>
                      <div className="text-xs text-gray-500">{item.location}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Documents</h3>
                <div className="grid grid-cols-1 md-cols-2 gap-4">
                  {trip.documents.map((doc) => (
                    <div key={doc.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="font-medium">{doc.name}</div>
                      <div className="text-sm text-gray-600 capitalize">{doc.type}</div>
                      {doc.expiryDate && (
                        <div className="text-xs text-gray-500 mt-1">
                          Expires{new Date(doc.expiryDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'expenses' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Expenses</h3>
                <div className="text-lg font-bold text-blue-600">
                  Total${totalExpenses}
                </div>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">Add New Expense</h4>
                <div className="grid grid-cols-1 md-cols-4 gap-3">
                  <select 
                    value={newExpense.category}
                    onChange={(e) => setNewExpense({...newExpense, category.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
                  >
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="activities">Activities</option>
                    <option value="shopping">Shopping</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Amount"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({...newExpense, amount.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({...newExpense, description.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
                  />
                  <button
                    onClick={addExpense}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {trip.expenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{expense.description}</div>
                      <div className="text-sm text-gray-600 capitalize">{expense.category} • {expense.date}</div>
                    </div>
                    <div className="text-lg font-semibold text-green-600">
                      ${expense.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'packing' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Packing List</h3>
                <div className="text-sm text-gray-600">
                  {packedItems} of {trip.packingList.length} packed
                </div>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-3">Add New Item</h4>
                <div className="grid grid-cols-1 md-cols-4 gap-3">
                  <select 
                    value={newPackingItem.category}
                    onChange={(e) => setNewPackingItem({...newPackingItem, category.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
                  >
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="documents">Documents</option>
                    <option value="toiletries">Toiletries</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Item name"
                    value={newPackingItem.item}
                    onChange={(e) => setNewPackingItem({...newPackingItem, item.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
                  />
                  <select 
                    value={newPackingItem.priority}
                    onChange={(e) => setNewPackingItem({...newPackingItem, priority.target.value})}
                    className="px-3 py-2 border border-gray-300 rounded-md focus-2 focus-blue-500 focus-transparent"
                  >
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                  <button
                    onClick={addPackingItem}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {trip.packingList.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                    <button
                      onClick={() => togglePackingItem(item.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        item.packed 
                          ? 'bg-green-600 border-green-600 text-white' 
                          'border-gray-300 hover-green-400'
                      }`}
                    >
                      {item.packed && <Check className="h-3 w-3" />}
                    </button>
                    <div className="flex-1">
                      <div className={`font-medium ${item.packed ? 'line-through text-gray-500' ''}`}>
                        {item.item}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {item.category} • {item.priority} priority
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      item.priority === 'high' ? 'bg-red-400' .priority === 'medium' ? 'bg-yellow-400' 'bg-green-400'
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'itinerary' && (
            <div>
              <h3 className="text-lg font-semibold mb-6">Daily Itinerary</h3>
              <div className="space-y-6">
                {Array.from(new Set(trip.itinerary.map(item => item.day))).map(day => (
                  <div key={day}>
                    <h4 className="font-semibold text-blue-600 mb-3">Day {day}</h4>
                    <div className="space-y-3">
                      {trip.itinerary
                        .filter(item => item.day === day)
                        .map((item) => (
                          <div key={item.id} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm font-medium text-blue-600 min-w-[60px]">
                              {item.time}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{item.activity}</div>
                              <div className="text-sm text-gray-600">{item.location}</div>
                              {item.notes && (
                                <div className="text-sm text-gray-500 mt-1">{item.notes}</div>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripDetail;