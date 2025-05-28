import React, { useState } from 'react';
import { Home, User, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [selectedAccountType, setSelectedAccountType] = useState(null);

  const handleAccountSelect = (type) => {
    setSelectedAccountType(type);
    console.log(`Selected account type: ${type}`);
    // In a real application, this would navigate to the login form for the selected account type
    // For now we're just selecting the account type visually
  };
  const handleSignUp = () => {
    // For now, this just logs a message since the signup page isn't implemented yet
    console.log('User requested to sign up');
    // In a real implementation, you would navigate to a signup page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl flex items-center justify-center mr-3">
              <Home className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              BoardingLK
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Choose your account type to login
          </p>
        </div>

        {/* Account Type Selection Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Select Account Type
          </h2>

          <div className="space-y-4">
            {/* Student Account */}
            <button
              onClick={() => handleAccountSelect('student')}
              className={`w-full p-6 rounded-xl border-2 transition-all duration-200 ${
                selectedAccountType === 'student'
                  ? 'border-purple-500 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg'
                  : 'border-gray-200 bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-md'
              }`}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <User className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-1">Student Account</h3>
                  <p className="text-blue-100">Find and book boarding places</p>
                </div>
              </div>
            </button>

            {/* Property Owner Account */}
            <button
              onClick={() => handleAccountSelect('owner')}
              className={`w-full p-6 rounded-xl border-2 transition-all duration-200 ${
                selectedAccountType === 'owner'
                  ? 'border-purple-500 bg-white text-gray-900 shadow-lg'
                  : 'border-gray-200 bg-white text-gray-900 hover:shadow-md hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 mr-4 flex-shrink-0">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Property Owner</h3>
                  <p className="text-gray-600">List and manage properties</p>
                </div>
              </div>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={handleSignUp}
                className="text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;