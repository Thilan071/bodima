import React from 'react';
import { Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-4 gap-16">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">BoardingLK</h2>
            </div>
            <p className="text-gray-300 text-base leading-relaxed pr-8">
              Connecting students with safe and affordable boarding accommodations across Sri Lanka.
            </p>
          </div>

          {/* For Students */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">For Students</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  Find Boarding
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  Student Support
                </a>
              </li>
            </ul>
          </div>

          {/* For Owners */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">For Owners</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  List Property
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  Owner Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  Verification Process
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white text-base">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="text-gray-300 text-base">
                📞 +94 11 234 5678
              </div>
              <div className="text-gray-300 text-base">
                ✉️ support@boardinglk.com
              </div>
              <div className="text-gray-300 text-base">
                📍 Colombo, Sri Lanka
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-400 text-base">
            © 2024 BoardingLK. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;