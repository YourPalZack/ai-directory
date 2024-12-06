import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { businesses } from '../data/businesses';
import { Map } from '../components/Map';
import { StarRating } from '../components/StarRating';

export function BusinessDetails() {
  const { id } = useParams();
  const business = businesses.find(b => b.id === id);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Business Not Found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Return to Directory</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Directory
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {business.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <StarRating rating={business.averageRating} />
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                ({business.reviews.length} reviews)
              </span>
            </div>

            <div className="space-y-4">
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {business.address}
              </p>
              
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {business.phone}
              </p>
              
              <a 
                href={business.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Visit Website
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
            <div className="space-y-2">
              {business.hours.map((hour) => (
                <div key={hour.day} className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span className="font-medium">{hour.day}</span>
                  <span>{hour.isClosed ? 'Closed' : `${hour.open} - ${hour.close}`}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <div className="space-y-4">
              {business.reviews.map((review) => (
                <div key={review.id} className="border-b dark:border-gray-700 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <StarRating rating={review.rating} />
                      <span className="ml-2 font-medium text-gray-900 dark:text-white">
                        {review.author}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="h-[calc(100vh-2rem)] sticky top-24">
          <Map businesses={[business]} />
        </div>
      </div>
    </div>
  );
}