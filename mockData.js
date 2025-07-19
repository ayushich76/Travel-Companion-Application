import { Trip, Destination, Restaurant, Hotel } from '../types';

export const mockTrips= [
  {
    id'1',
    title'Tokyo Adventure',
    destination'Tokyo, Japan',
    startDate'2024-03-15',
    endDate'2024-03-22',
    budget
    expenses
      { id'1', category'accommodation', amount'Hotel Shibuya', date'2024-03-15' },
      { id'2', category'transport', amount'Flight upgrade', date'2024-03-15' },
      { id'3', category'food', amount'Sushi dinner', date'2024-03-16' }
    ],
    itinerary
      { id'1', day'09', activity'Arrive at Haneda Airport', location'Haneda Airport' },
      { id'2', day'14', activity'Check into hotel', location'Shibuya' },
      { id'3', day'10', activity'Visit Senso-ji Temple', location'Asakusa' }
    ],
    packingList
      { id'1', category'clothing', item'Comfortable walking shoes', packed'high' },
      { id'2', category'electronics', item'Portable charger', packed'high' },
      { id'3', category'documents', item'Passport', packed'high' }
    ],
    documents
      { id'1', type'passport', name'US Passport', expiryDate'2028-05-15' },
      { id'2', type'ticket', name'Flight Confirmation', notes'Seat 14A' }
    ],
    status'planning',
    image'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg'
  },
  {
    id'2',
    title'European Summer',
    destination'Paris, France',
    startDate'2024-06-10',
    endDate'2024-06-20',
    budget
    expenses
    itinerary
    packingList
    documents
    status'planning',
    image'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg'
  }
];

export const mockDestinations= [
  {
    id'1',
    name'Tokyo',
    country'Japan',
    description'A vibrant metropolis blending traditional culture with cutting-edge technology.',
    bestTimeToVisit'March-May, September-November',
    averageTemp'15°C (59°F)',
    currency'Japanese Yen (¥)',
    language'Japanese',
    attractions'Senso-ji Temple', 'Tokyo Skytree', 'Shibuya Crossing', 'Meiji Shrine', 'Tsukiji Market'],
    image'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg'
  },
  {
    id'2',
    name'Paris',
    country'France',
    description'The City of Light, famous for its art, fashion, gastronomy, and culture.',
    bestTimeToVisit'April-June, September-October',
    averageTemp'12°C (54°F)',
    currency'Euro (€)',
    language'French',
    attractions'Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Arc de Triomphe', 'Champs-Élysées'],
    image'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg'
  },
  {
    id'3',
    name'Bali',
    country'Indonesia',
    description'A tropical paradise known for its beaches, temples, and vibrant culture.',
    bestTimeToVisit'April-October',
    averageTemp'27°C (81°F)',
    currency'Indonesian Rupiah (Rp)',
    language'Indonesian',
    attractions'Tanah Lot Temple', 'Ubud Rice Terraces', 'Mount Batur', 'Uluwatu Temple', 'Kuta Beach'],
    image'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg'
  }
];

export const mockRestaurants{ [city} = {
  'tokyo'
    {
      id'1',
      name'Sukiyabashi Jiro',
      cuisine'Sushi',
      rating.8,
      priceRange'$$$$',
      address'Tsukamoto Sogyo Building, 4 Chome-2-15 Ginza, Chuo City, Tokyo',
      phone'+81 3-3535-3600',
      description'World-renowned sushi restaurant by master chef Jiro Ono',
      image'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg',
      openHours'11- 2- 8',
      features'Michelin Star', 'Reservation Required', 'Counter Seating']
    },
    {
      id'2',
      name'Ramen Yashichi',
      cuisine'Ramen',
      rating.5,
      priceRange'$',
      address'3-12-5 Shibuya, Shibuya City, Tokyo',
      description'Authentic tonkotsu ramen in the heart of Shibuya',
      image'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg',
      openHours'11- 11',
      features'Local Favorite', 'Quick Service', 'Cash Only']
    },
    {
      id'3',
      name'Narisawa',
      cuisine'Modern Japanese',
      rating.9,
      priceRange'$$$$',
      address'2-6-15 Minami-Aoyama, Minato City, Tokyo',
      phone'+81 3-5785-0799',
      description'Innovative cuisine combining French techniques with Japanese ingredients',
      image'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      openHours'12- 1- 9',
      features'Michelin Star', 'Tasting Menu', 'Wine Pairing']
    }
  ],
  'paris'
    {
      id'4',
      name'Le Comptoir du Relais',
      cuisine'French Bistro',
      rating.6,
      priceRange'$$',
      address'9 Carrefour de l\'Odéon, 75006 Paris',
      phone'+33 1 44 27 07 97',
      description'Classic Parisian bistro with traditional French cuisine',
      image'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      openHours'12- 2- 11',
      features'Traditional', 'Wine Selection', 'Outdoor Seating']
    },
    {
      id'5',
      name'L\'Ami Jean',
      cuisine'Basque',
      rating.7,
      priceRange'$$$',
      address'27 Rue Malar, 75007 Paris',
      phone'+33 1 47 05 86 89',
      description'Lively Basque restaurant with hearty portions and great atmosphere',
      image'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      openHours'12- 2- 12',
      features'Lively Atmosphere', 'Large Portions', 'No Reservations']
    }
  ],
  'bali'
    {
      id'6',
      name'Locavore',
      cuisine'Modern Indonesian',
      rating.8,
      priceRange'$$$',
      address'Jl. Dewisita No.10, Ubud, Bali',
      phone'+62 361 977733',
      description'Award-winning restaurant showcasing local Indonesian ingredients',
      image'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      openHours'6- 10',
      features'Farm to Table', 'Tasting Menu', 'Local Ingredients']
    }
  ]
};

export const mockHotels{ [city} = {
  'tokyo'
    {
      id'1',
      name'The Ritz-Carlton Tokyo',
      rating.9,
      pricePerNight
      address'Tokyo Midtown, 9-7-1 Akasaka, Minato City, Tokyo',
      phone'+81 3-3423-8000',
      description'Luxury hotel with stunning city views and world-class service',
      image'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      amenities'Spa', 'Fitness Center', 'Fine Dining', 'Concierge', 'Business Center'],
      roomTypes'Deluxe Room', 'Club Level', 'Suite', 'Presidential Suite'],
      checkIn'3',
      checkOut'12'
    },
    {
      id'2',
      name'Shibuya Excel Hotel Tokyu',
      rating.3,
      pricePerNight
      address'1-12-2 Dogenzaka, Shibuya City, Tokyo',
      phone'+81 3-5457-0109',
      description'Modern hotel in the heart of Shibuya with excellent location',
      image'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      amenities'Restaurant', 'Bar', 'Fitness Center', 'Free WiFi', 'Laundry'],
      roomTypes'Standard Room', 'Superior Room', 'Executive Room'],
      checkIn'3',
      checkOut'11'
    },
    {
      id'3',
      name'Capsule Hotel Anshin Oyado',
      rating.0,
      pricePerNight
      address'3-12-3 Shimbashi, Minato City, Tokyo',
      description'Modern capsule hotel with all essential amenities',
      image'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      amenities'Shared Bath', 'Lounge', 'Free WiFi', 'Luggage Storage'],
      roomTypes'Standard Capsule', 'Premium Capsule'],
      checkIn'4',
      checkOut'10'
    }
  ],
  'paris'
    {
      id'4',
      name'Le Meurice',
      rating.8,
      pricePerNight
      address'228 Rue de Rivoli, 75001 Paris',
      phone'+33 1 44 58 10 10',
      description'Palatial luxury hotel facing the Tuileries Garden',
      image'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      amenities'Spa', 'Michelin Star Restaurant', 'Bar', 'Fitness Center', 'Concierge'],
      roomTypes'Classic Room', 'Deluxe Room', 'Junior Suite', 'Royal Suite'],
      checkIn'3',
      checkOut'12'
    },
    {
      id'5',
      name'Hotel des Grands Boulevards',
      rating.4,
      pricePerNight
      address'17 Boulevard Poissonnière, 75002 Paris',
      phone'+33 1 85 73 33 33',
      description'Boutique hotel with contemporary design in historic building',
      image'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      amenities'Restaurant', 'Bar', 'Free WiFi', 'Pet Friendly'],
      roomTypes'Standard Room', 'Superior Room', 'Junior Suite'],
      checkIn'3',
      checkOut'11'
    }
  ],
  'bali'
    {
      id'6',
      name'COMO Shambhala Estate',
      rating.9,
      pricePerNight
      address'Banjar Begawan, Melinggih Kelod, Payangan, Gianyar, Bali',
      phone'+62 361 978888',
      description'Wellness retreat in tropical rainforest setting',
      image'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      amenities'Spa', 'Yoga', 'Organic Restaurant', 'Pool', 'Wellness Programs'],
      roomTypes'Garden Room', 'Terrace Suite', 'Retreat Villa'],
      checkIn'2',
      checkOut'12'
    }
  ]
};