import React from 'react';
import { UserPlus, Search, MessageCircle, Home, CheckCircle, Star, Shield, Clock } from 'lucide-react';
import TopNavigation from '../topNavigation/topNavigation';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';

export default function HowItWorksComponent() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />
      {/* Main Content */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              How BoardingLK Works
            </h1>
            <p className="text-base text-gray-600 max-w-lg mx-auto">
              Finding safe and affordable boarding has never been easier. Follow these simple steps
              to find your perfect accommodation.
            </p>
          </div>

          {/* For Students Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
              For Students
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1: Create Account */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  1. Create Account
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Sign up with your university email and create your
                  student profile with preferences.
                </p>
                <div className="text-xs text-blue-600 space-y-1">
                  <div>• Free registration</div>
                  <div>• University verification</div>
                  <div>• Set your preferences</div>
                </div>
              </div>

              {/* Step 2: Search & Filter */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  2. Search & Filter
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Use our advanced search to find boarding places
                  that match your budget and preferences.
                </p>
                <div className="text-xs text-blue-600 space-y-1">
                  <div>• Search by university</div>
                  <div>• Filter by price & amenities</div>
                  <div>• View on interactive map</div>
                </div>
              </div>

              {/* Step 3: Connect & Visit */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  3. Connect & Visit
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Message property owners directly, ask questions,
                  and schedule visits to find your perfect place.
                </p>
                <div className="text-xs text-blue-600 space-y-1">
                  <div>• Direct messaging</div>
                  <div>• Schedule visits</div>
                  <div>• Ask questions safely</div>
                </div>
              </div>
            </div>
          </div>

          {/* For Property Owners Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
              For Property Owners
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1: List Property */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  1. List Property
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Create detailed listings with photos, pricing, and
                  amenities to attract students.
                </p>
                <div className="text-xs text-green-600 space-y-1">
                  <div>• Upload multiple photos</div>
                  <div>• Set competitive pricing</div>
                  <div>• List all amenities</div>
                </div>
              </div>

              {/* Step 2: Connect with Students */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  2. Connect with Students
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Receive inquiries from verified students and
                  communicate through our secure platform.
                </p>
                <div className="text-xs text-green-600 space-y-1">
                  <div>• Verified student profiles</div>
                  <div>• Secure messaging</div>
                  <div>• Schedule property visits</div>
                </div>
              </div>

              {/* Step 3: Manage Bookings */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  3. Manage Bookings
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Accept bookings, manage your properties, and
                  build your reputation through reviews.
                </p>
                <div className="text-xs text-green-600 space-y-1">
                  <div>• Easy booking management</div>
                  <div>• Build your reputation</div>
                  <div>• Increase occupancy rates</div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety & Trust Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-12">
              Safety & Trust
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Verified Properties */}
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">
                  Verified Properties
                </h3>
                <p className="text-xs text-gray-600">
                  All properties go through our verification
                  process
                </p>
              </div>

              {/* Student Reviews */}
              <div className="text-center">
                <div className="bg-green-100 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">
                  Student Reviews
                </h3>
                <p className="text-xs text-gray-600">
                  Read genuine reviews from fellow students
                </p>
              </div>

              {/* Secure Communication */}
              <div className="text-center">
                <div className="bg-purple-100 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">
                  Secure Communication
                </h3>
                <p className="text-xs text-gray-600">
                  All messages are monitored for safety
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="text-center">
                <div className="bg-red-100 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">
                  24/7 Support
                </h3>
                <p className="text-xs text-gray-600">
                  Round-the-clock customer support
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base mb-8 opacity-90">
              Join thousands of students who have found their perfect boarding through BoardingLK
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Sign Up as Student
              </button>
              <button 
                onClick={() => navigate('/list-property')}
                className="bg-transparent border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors cursor-pointer"
              >
                List Your Property
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}