// filepath: e:\Bodima web\bodima\src\components\propertyList\propertyList.js
import React, { useState } from 'react';
import TopNavigation from '../topNavigation/topNavigation';
import Footer from '../footer/footer';

export default function PropertyList() {
  const [formData, setFormData] = useState({
    propertyTitle: '',
    monthlyRent: '',
    description: '',
    address: '',
    nearestUniversity: '',
    buildingType: '',
    numberOfRooms: '',
    numberOfBathrooms: '',
    amenities: {
      wifi: false,
      laundry: false,
      kitchenBathroom: false,
      mealsIncluded: false,
      studyArea: false,
      hotWater: false,
      airConditioning: false,
      commonRoom: false,
      bicycleAccess: false,
      parking: false,
      security: false,
      garden: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAmenityChange = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity]
      }
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-blue-600 mb-4">List Your Property</h1>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Connect with students looking for safe and comfortable boarding. List your property in 
              minutes and start receiving bookings.
            </p>
          </div>

          {/* Benefits Icons */}
          <div className="grid grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-2xl font-bold">$</span>
              </div>
              <h3 className="font-medium text-lg mb-2">Earn Extra Income</h3>
              <p className="text-sm text-gray-500">Earn rent money directly from your property</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7C14.4 7 14 6.6 14 6S14.4 5 15 5V3C14.4 3 14 2.6 14 2S14.4 1 15 1H21V21C21 21.6 20.6 22 20 22S19 21.6 19 21V9H21ZM7 9C7.6 9 8 9.4 8 10S7.6 11 7 11H5V21C5 21.6 4.6 22 4 22S3 21.6 3 21V9H7Z"/>
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Verified Students</h3>
              <p className="text-sm text-gray-500">Connect with pre-verified university students</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Easy Management</h3>
              <p className="text-sm text-gray-500">Manage bookings and payments online in one place</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-md border p-10">
            <h2 className="text-2xl font-medium text-purple-600 mb-8">Property Details</h2>
            
            {/* Basic Information */}
            <div className="mb-8">
              <h3 className="font-medium text-lg mb-5">Basic Information</h3>
              
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">Property Title</label>
                  <input
                    type="text"
                    name="propertyTitle"
                    value={formData.propertyTitle}
                    onChange={handleInputChange}
                    placeholder="e.g. Cozy Student Room University"
                    className="w-full px-5 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">Monthly Rent (LKR)</label>
                  <input
                    type="text"
                    name="monthlyRent"
                    value={formData.monthlyRent}
                    onChange={handleInputChange}
                    placeholder="35000"
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-base font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your property, house rules and what makes it special"
                  rows={6}
                  className="w-full px-5 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <h3 className="font-medium text-lg mb-5 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Location
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Full address"
                    className="w-full px-5 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">Nearest University</label>
                  <select
                    name="nearestUniversity"
                    value={formData.nearestUniversity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select university</option>
                    <option value="university1">University 1</option>
                    <option value="university2">University 2</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="mb-8">
              <h3 className="font-medium text-lg mb-5 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
                Property Details
              </h3>
              
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">Building Type</label>
                  <select
                    name="buildingType"
                    value={formData.buildingType}
                    onChange={handleInputChange}
                    className="w-full px-5 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">Number of Rooms</label>
                  <input
                    type="number"
                    name="numberOfRooms"
                    value={formData.numberOfRooms}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-2">Number of Bathrooms</label>
                  <input
                    type="number"
                    name="numberOfBathrooms"
                    value={formData.numberOfBathrooms}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h3 className="font-medium text-lg mb-5">Amenities</h3>
              
              <div className="grid grid-cols-3 gap-10">
                <div className="space-y-4">
                  {[
                    { key: 'wifi', label: 'Wi-Fi' },
                    { key: 'laundry', label: 'Laundry' },
                    { key: 'kitchenBathroom', label: 'Kitchen Bathroom' }
                  ].map(amenity => (
                    <label key={amenity.key} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.amenities[amenity.key]}
                        onChange={() => handleAmenityChange(amenity.key)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-base text-gray-700">{amenity.label}</span>
                    </label>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {[
                    { key: 'mealsIncluded', label: 'Meals Included' },
                    { key: 'studyArea', label: 'Study Area' },
                    { key: 'hotWater', label: 'Hot Water' }
                  ].map(amenity => (
                    <label key={amenity.key} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.amenities[amenity.key]}
                        onChange={() => handleAmenityChange(amenity.key)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-base text-gray-700">{amenity.label}</span>
                    </label>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {[
                    { key: 'airConditioning', label: 'Air Conditioning' },
                    { key: 'commonRoom', label: 'Common Room' },
                    { key: 'bicycleAccess', label: 'Bicycle Access' },
                    { key: 'parking', label: 'Parking' },
                    { key: 'security', label: 'Security' },
                    { key: 'garden', label: 'Garden' }
                  ].map(amenity => (
                    <label key={amenity.key} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.amenities[amenity.key]}
                        onChange={() => handleAmenityChange(amenity.key)}
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-base text-gray-700">{amenity.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Photos */}
            <div className="mb-8">
              <h3 className="font-medium text-lg mb-5 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
                Photos
              </h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-20 text-center">
                <svg className="w-20 h-20 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-gray-600 text-xl mb-3">Upload property photos</p>
                <p className="text-base text-gray-500 mb-6">Add at least 3 high-quality photos</p>
                <button className="px-8 py-4 border-2 border-gray-300 rounded-md text-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Choose Files
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6">
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-5 px-8 rounded-md text-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-colors shadow-md">
                List Property
              </button>
              <button className="px-10 py-5 border-2 border-gray-300 rounded-md text-gray-700 text-lg font-medium hover:bg-gray-50 transition-colors">
                Save as Draft
              </button>
            </div>
          </div>

          {/* Listing Fee */}
          <div className="mt-8 bg-white rounded-lg shadow-md border p-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-lg">Listing Fee</h3>
                <p className="text-base text-gray-600 mt-1">Basic listing (30 days)</p>
                <p className="text-sm text-gray-500 mt-1">Includes property verification and support</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">FREE</p>
                <p className="text-sm text-gray-500 mt-1">Limited time offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
