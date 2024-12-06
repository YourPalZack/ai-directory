import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { GOOGLE_MAPS_API_KEY, DEFAULT_CENTER, DEFAULT_ZOOM } from '../config/maps';

export function Map({ businesses }) {
  const mapRef = useRef(null);
  const [mapError, setMapError] = useState(null);

  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY') {
      setMapError('Google Maps API key not configured');
      return;
    }

    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: 'weekly'
    });

    loader.load()
      .then((google) => {
        const map = new google.maps.Map(mapRef.current, {
          center: businesses?.[0]?.coordinates || DEFAULT_CENTER,
          zoom: DEFAULT_ZOOM,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        });

        // Add markers for each business
        if (businesses?.length > 0) {
          businesses.forEach((business) => {
            if (business?.coordinates) {
              const marker = new google.maps.Marker({
                position: business.coordinates,
                map: map,
                title: business.name
              });

              // Create an info window for each marker
              const infoWindow = new google.maps.InfoWindow({
                content: `
                  <div class="p-2">
                    <h3 class="font-semibold">${business.name}</h3>
                    <p class="text-sm">${business.address}</p>
                  </div>
                `
              });

              // Add click listener to show info window
              marker.addListener('click', () => {
                infoWindow.open(map, marker);
              });
            }
          });

          // If there are multiple businesses, fit bounds to show all markers
          if (businesses.length > 1) {
            const bounds = new google.maps.LatLngBounds();
            businesses.forEach((business) => {
              if (business?.coordinates) {
                bounds.extend(business.coordinates);
              }
            });
            map.fitBounds(bounds);
          }
        }
      })
      .catch((error) => {
        console.error('Error loading Google Maps:', error);
        setMapError('Error loading Google Maps');
      });
  }, [businesses]);

  if (mapError) {
    return (
      <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-gray-600 dark:text-gray-300">{mapError}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Please configure your Google Maps API key in config/maps.js
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={mapRef} className="w-full h-full rounded-lg shadow-lg" />
  );
}