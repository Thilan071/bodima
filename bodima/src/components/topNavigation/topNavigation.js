import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../login/loginModal';
import SignupModal from '../signup/signupModal';

const TopNavigation = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignupModalOpen(false);
  };
  
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  
  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    setIsLoginModalOpen(false);
  };
  
  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };
  
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-600">BoardingLK</h1>
              <p className="text-xs text-gray-500 -mt-1">Find Your Perfect Stay</p>
            </div>
          </div>          {/* Navigation Links */}
          <div className="flex items-center space-x-12">
            <span 
              onClick={() => navigate('/search')}
              className="text-gray-500 hover:text-blue-600 font-normal text-base cursor-pointer"
            >
              Search
            </span>
            <span 
              onClick={() => navigate('/how-it-works')}
              className="text-gray-500 hover:text-blue-600 font-normal text-base cursor-pointer"
            >
              How it Works
            </span>            <span 
              onClick={() => navigate('/list-property')}
              className="text-gray-500 hover:text-blue-600 font-normal text-base cursor-pointer"
            >
              List Property
            </span>
            <span 
              onClick={() => navigate('/support')}
              className="text-gray-500 hover:text-blue-600 font-normal text-base cursor-pointer"
            >
              Support
            </span>
          </div>          {/* Login and Sign Up */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={openLoginModal} 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </button>            <button 
              onClick={openLoginModal}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-200"
            >
              Sign Up
            </button>
            
            {/* Login Modal */}
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;