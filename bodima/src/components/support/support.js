import React, { useState } from 'react';
import { Search, Shield, HelpCircle, Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import TopNavigation from '../topNavigation/topNavigation';
import Footer from '../footer/footer';

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent successfully!');
  };

  const faqItems = [
    "How do I search for boarding places?",
    "Are all properties verified?",
    "How do I contact property owners?",
    "Is there a fee for students to use BoardingX?",
    "How do I report a suspicious listing?",
    "Can I cancel a booking?",
    "How do I list my property?",
    "What payment methods are accepted?"
  ];
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopNavigation />
      <div className="flex-grow py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get quick answers to your questions or reach out to our support team. We're here to help you find your perfect boarding.
          </p>
        </div>

        {/* Quick Help Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Search Help */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Search Help</h3>
            <p className="text-gray-600 text-sm">Learn how to use our search and filters</p>
          </div>

          {/* Safety Guide */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Guide</h3>
            <p className="text-gray-600 text-sm">Tips for safe boarding experiences</p>
          </div>

          {/* General FAQ */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">General FAQ</h3>
            <p className="text-gray-600 text-sm">Answers to common questions</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    <span className="text-gray-900 font-medium">{item}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">
                        This is where the answer to "{item}" would appear. 
                        You can replace this with actual FAQ content.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Send us a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@gmail.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select category</option>
                  <option value="booking">Booking Issues</option>
                  <option value="payment">Payment Problems</option>
                  <option value="property">Property Questions</option>
                  <option value="account">Account Issues</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief description of your issue"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Describe your issue or question in detail"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 font-medium transition-colors"
              >
                Send Message
              </button>
            </div>

            {/* Other Contact Methods */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                {/* Phone Support */}
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone Support</h4>
                      <p className="text-sm text-gray-600">Speak with our support team</p>
                      <p className="text-sm font-medium text-blue-600">+44 20 1234 5678</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">Mon-Fri 9AM-6PM</span>
                </div>

                {/* Email Support */}
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email Support</h4>
                      <p className="text-sm text-gray-600">Email us directly</p>
                      <p className="text-sm font-medium text-green-600">support@boardingx.com</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">24/7 Response</span>
                </div>

                {/* Live Chat */}
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <MessageCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Live Chat</h4>
                      <p className="text-sm text-gray-600">Chat with us instantly</p>
                      <p className="text-sm font-medium text-purple-600">Available on website</p>
                    </div>                  </div>
                  <span className="text-xs text-gray-500">Mon-Fri 9AM-6PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support;