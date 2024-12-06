import React from 'react';
import { Link } from 'react-router-dom';
import { StarRating } from './StarRating';
import { BusinessHours } from './BusinessHours';

export function BusinessCard({ business }) {
  if (!business) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 relative">
        <img
          src={business.images[0]}
          alt={business.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {business.name}
        </h3>
        <div className="flex items-center mb-2">
          <StarRating rating={business.averageRating} />
          <span className="ml-2 text-gray-600 dark:text-gray-300">
            ({business.reviews.length} reviews)
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          {business.address}
        </p>
        <BusinessHours hours={business.hours} />
        <div className="mt-4">
          <Link 
            to={`/business/${business.id}`}
            className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}