// filepath: e:\Bodima web\bodima\src\components\howItWorks\howItWorks.js
import React from 'react';
import { UserPlus, Search, MessageCircle, Home, Calendar } from 'lucide-react';
import TopNavigation from '../topNavigation/topNavigation';
import Footer from '../footer/footer';

export default function HowItWorksComponent() {
  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              How BoardingLK Works
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Finding safe and affordable boarding has never been easier. Follow these simple steps
              to find your perfect accommodation.
            </p>
          </div>

          {/* For Students Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
              For Students
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1: Create Account */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  1. Create Account
                </h3>
                <p className="text-gray-600 mb-6">
                  Sign up with your university email and create your
                  student profile with preferences.
                </p>
                <div className="text-sm text-blue-600 space-y-1">
                  <div>� Free registration</div>
                  <div>� University verification</div>
                  <div>� Set your preferences</div>
                </div>
              </div>

              {/* Step 2: Search & Filter */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  2. Search & Filter
                </h3>
                <p className="text-gray-600 mb-6">
                  Use our advanced search to find boarding places
                  that match your budget and preferences.
                </p>
                <div className="text-sm text-blue-600 space-y-1">
                  <div>� Search by university</div>
                  <div>� Filter by price & amenities</div>
                  <div>� View on interactive map</div>
                </div>
              </div>

              {/* Step 3: Connect & Visit */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  3. Connect & Visit
                </h3>
                <p className="text-gray-600 mb-6">
                  Message property owners directly, ask questions,
                  and schedule visits to find your perfect place.
                </p>
                <div className="text-sm text-blue-600 space-y-1">
                  <div>� Direct messaging</div>
                  <div>� Schedule visits</div>
                  <div>� Ask questions safely</div>
                </div>
              </div>
            </div>
          </div>

          {/* For Property Owners Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
              For Property Owners
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1: List Property */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  1. List Property
                </h3>
                <p className="text-gray-600 mb-6">
                  Create detailed listings with photos, pricing, and
                  amenities to attract students.
                </p>
                <div className="text-sm text-green-600 space-y-1">
                  <div>� Upload multiple photos</div>
                  <div>� Set competitive pricing</div>
                  <div>� List all amenities</div>
                </div>
              </div>

              {/* Step 2: Connect with Students */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  2. Connect with Students
                </h3>
                <p className="text-gray-600 mb-6">
                  Receive inquiries from verified students and
                  communicate through our secure platform.
                </p>
                <div className="text-sm text-green-600 space-y-1">
                  <div>� Verified student profiles</div>
                  <div>� Secure messaging</div>
                  <div>� Schedule property visits</div>
                </div>
              </div>

              {/* Step 3: Manage Bookings */}
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  3. Manage Bookings
                </h3>
                <p className="text-gray-600 mb-6">
                  Accept bookings, manage your properties, and
                  build your reputation through reviews.
                </p>
                <div className="text-sm text-green-600 space-y-1">
                  <div>� Easy booking management</div>
                  <div>� Build your reputation</div>
                  <div>� Increase occupancy rates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
