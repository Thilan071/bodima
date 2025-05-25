import React from 'react';
import { Search, MessageCircle, Shield, MapPin, Clock, Star } from 'lucide-react';
import TopNavigation from '../topNavigation/topNavigation';
import Footer from '../footer/footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">      <TopNavigation />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#5409DA] to-[#BBFBFF] text-white py-20" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #5409DA, #4E71FF, #8DD8FF, #BBFBFF)' 
          }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect</h1>
          <h2 className="text-4xl font-light mb-8 text-blue-200">Student Accommodation</h2>
          <p className="text-xl mb-12 opacity-90">
            Discover safe, affordable, and verified boarding places near universities across Sri Lanka
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-16 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-blue-200">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-blue-200">Students</div>
            </div>
          </div>
          
          {/* Search Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">University</label>
                <select className="w-full p-3 border border-gray-300 rounded-md text-gray-700">
                  <option>Select University</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Budget (LKR)</label>
                <select className="w-full p-3 border border-gray-300 rounded-md text-gray-700">
                  <option>Select Budget</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-md text-gray-700">
                  <option>Select Type</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
                <input 
                  type="text" 
                  placeholder="Enter area or city" 
                  className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition duration-200">
                Find Boarding Places
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>4.8/5 Student Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span>Verified Landlords</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>Instant Web Coverage</span>
            </div>
          </div>
        </div>
      </div>

      {/* How BoardingLK Works */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How BoardingLK Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Search & Filter</h3>
              <p className="text-gray-600">
                Find boarding places near your university with our advanced search and filtering options.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Connect & Chat</h3>
              <p className="text-gray-600">
                Directly message property owners, ask questions, and schedule visits through our platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Book Safely</h3>
              <p className="text-gray-600">
                Book verified accommodations with confidence through our secure and trusted platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose BoardingLK */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose BoardingLK?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Verified Properties</h3>
              <p className="text-gray-600 text-sm">
                All properties are verified for safety and authenticity.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Near Universities</h3>
              <p className="text-gray-600 text-sm">
                Find accommodations close to your university campus.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock customer support for all your queries.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Trusted Reviews</h3>
              <p className="text-gray-600 text-sm">
                Read genuine reviews from fellow students.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Students Say */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Found the perfect boarding place within minutes! The platform made it so easy to find verified accommodations near my university."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">Kamal Perera</p>
                <p className="text-gray-500 text-sm">University of Colombo</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "As a girl, I got a separate area, safety was my top concern. BoardingLK helped me find a safe, girls-only place with great reviews."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">Priya Silva</p>
                <p className="text-gray-500 text-sm">University of Peradeniya</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Great platform with lots of options. The chat feature made communication with landlords seamless and efficient."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">Nuwan Fernando</p>
                <p className="text-gray-500 text-sm">SLIIT</p>
              </div>
            </div>
          </div>        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;