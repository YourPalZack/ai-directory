import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Navbar } from './components/Navbar';
import { BusinessList } from './components/BusinessList';
import { Map } from './components/Map';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { BusinessDetails } from './pages/BusinessDetails';
import { businesses } from './data/businesses';

// Initialize GA4
ReactGA.initialize('G-XXXXXXXXXX');

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showMap, setShowMap] = useState(false);

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Navbar />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4 py-8">
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setShowMap(!showMap)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {showMap ? 'Hide Map' : 'Show Map'}
                  </button>
                </div>
                <div className={`grid gap-8 ${showMap ? 'grid-cols-1 lg:grid-cols-2' : ''}`}>
                  <div className={showMap ? 'col-span-1' : 'col-span-full'}>
                    <BusinessList businesses={businesses} />
                  </div>
                  {showMap && (
                    <div className="col-span-1 sticky top-24 h-[calc(100vh-6rem)]">
                      <Map businesses={businesses} />
                    </div>
                  )}
                </div>
              </div>
            } />
            <Route path="/business/:id" element={<BusinessDetails />} />
          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}