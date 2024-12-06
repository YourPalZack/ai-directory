export const businesses = [
  {
    id: '1',
    name: 'The Coffee House Manila',
    address: '123 Bonifacio High Street, BGC, Taguig',
    phone: '+63 2 8555 1234',
    website: 'https://coffeehouse.example.com',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400',
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400'
    ],
    hours: [
      { day: 'Monday', open: '07:00', close: '22:00', isClosed: false },
      { day: 'Tuesday', open: '07:00', close: '22:00', isClosed: false },
      { day: 'Wednesday', open: '07:00', close: '22:00', isClosed: false },
      { day: 'Thursday', open: '07:00', close: '22:00', isClosed: false },
      { day: 'Friday', open: '07:00', close: '23:00', isClosed: false },
      { day: 'Saturday', open: '08:00', close: '23:00', isClosed: false },
      { day: 'Sunday', open: '08:00', close: '22:00', isClosed: false }
    ],
    reviews: [
      {
        id: '1',
        author: 'Juan Dela Cruz',
        rating: 5,
        comment: 'Best coffee in BGC! Great atmosphere and friendly staff.',
        date: '2023-11-15'
      },
      {
        id: '2',
        author: 'Maria Santos',
        rating: 4,
        comment: 'Love their pastries and cold brew.',
        date: '2023-11-10'
      }
    ],
    averageRating: 4.5,
    coordinates: { lat: 14.5547, lng: 121.0244 }
  },
  {
    id: '2',
    name: 'Metro Fitness Center',
    address: '456 Emerald Avenue, Ortigas Center, Pasig',
    phone: '+63 2 8777 5678',
    website: 'https://metrofitness.example.com',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400'
    ],
    hours: [
      { day: 'Monday', open: '06:00', close: '22:00', isClosed: false },
      { day: 'Tuesday', open: '06:00', close: '22:00', isClosed: false },
      { day: 'Wednesday', open: '06:00', close: '22:00', isClosed: false },
      { day: 'Thursday', open: '06:00', close: '22:00', isClosed: false },
      { day: 'Friday', open: '06:00', close: '22:00', isClosed: false },
      { day: 'Saturday', open: '07:00', close: '20:00', isClosed: false },
      { day: 'Sunday', open: '07:00', close: '18:00', isClosed: false }
    ],
    reviews: [
      {
        id: '1',
        author: 'Mike Tan',
        rating: 5,
        comment: 'Modern equipment and great trainers!',
        date: '2023-11-12'
      }
    ],
    averageRating: 5.0,
    coordinates: { lat: 14.5849, lng: 121.0614 }
  }
];