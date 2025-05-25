// filepath: e:\Bodima web\bodima\src\components\search\search.js
import React from 'react';
import { Search, MapPin, Filter, Eye } from 'lucide-react';
import TopNavigation from '../topNavigation/topNavigation';
import Footer from '../footer/footer';

export default function SearchComponent() {
  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-600 mb-4">
              Find Your Perfect Boarding
            </h1>
            <p className="text-xl text-gray-600">
              Search from thousands of verified boarding places near your university
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* University Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                  <option>Select university</option>
                </select>
              </div>

              {/* Location Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter area or address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Budget Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget (LKR)
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                  <option>Price range</option>
                </select>
              </div>

              {/* Type Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                  <option>Boarding type</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-200 flex items-center justify-center gap-3">
              <Search className="w-5 h-5" />
              Search Boarding Places
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Near Universities Card */}
            <div className="bg-cyan-100 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Near Universities
              </h3>
              <p className="text-gray-600">
                Find accommodations within walking distance of your campus
              </p>
            </div>

            {/* Advanced Filters Card */}
            <div className="bg-green-100 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Filter className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Advanced Filters
              </h3>
              <p className="text-gray-600">
                Filter by price, amenities, and boarding type
              </p>
            </div>

            {/* Smart Search Card */}
            <div className="bg-purple-100 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Smart Search
              </h3>
              <p className="text-gray-600">
                Our algorithm finds the best matches for your needs
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
