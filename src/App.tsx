import React, { useState } from 'react';
import { Shield, Code2, Cpu, Lock, Globe, Clock, Github, Mail, Rocket, Users, X } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl border border-white/40 hover:border-white/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl animate-fade-in">
      <Icon className="w-8 h-8 mb-4 text-indigo-500 animate-bounce-slow" />
      <h3 className="text-xl font-bold mb-2 text-indigo-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function EmailModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    experience: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = "[IberOS Dev] Application from " + formData.name;
    const emailBody = `Dear IberOS Team,

I am writing to express my interest in joining the IberOS project.

Name: ${formData.name}
Email: ${formData.email}

Experience:
${formData.experience}

GitHub profile:
${formData.github}

Motivation:
${formData.motivation}

Looking forward to your response.

Best regards,
${formData.name}`;

    window.location.href = `mailto:ibersoft96@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-indigo-900">Apply to IberOS</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Profile URL</label>
            <input
              type="url"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.github}
              onChange={(e) => setFormData({...formData, github: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
            <textarea
              required
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Motivation</label>
            <textarea
              required
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.motivation}
              onChange={(e) => setFormData({...formData, motivation: e.target.value})}
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Send Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 animate-fade-in-up">
        <div className="text-center mb-16">
          <img 
            src="https://raw.githubusercontent.com/weed35937/iber/main/logo1.png" 
            alt="IberOS Logo"
            className="h-32 mx-auto mb-8 animate-float"
          />
          <h1 className="text-6xl font-bold text-indigo-900 mb-6 animate-slide-in">
            Join the Operating System Revolution
          </h1>
          <p className="text-2xl text-indigo-700 max-w-3xl mx-auto animate-fade-in">
            We're building IberOS - a free, secure, and innovative alternative to Windows and macOS. 
            Help us redefine the future of computing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={Shield}
            title="Privacy-First"
            description="Built from the ground up with security and privacy as core principles"
          />
          <FeatureCard
            icon={Cpu}
            title="Modern Architecture"
            description="Leveraging Rust for performance, reliability, and memory safety"
          />
          <FeatureCard
            icon={Globe}
            title="Web3 Ready"
            description="Native integration with blockchain and decentralized technologies"
          />
          <FeatureCard
            icon={Code2}
            title="Open Source"
            description="Transparent development process and community-driven innovation"
          />
          <FeatureCard
            icon={Rocket}
            title="Future-Proof"
            description="Built for emerging technologies like AI and quantum computing"
          />
          <FeatureCard
            icon={Users}
            title="Community Focused"
            description="Join a team of passionate developers shaping the future"
          />
        </div>

        {/* We're Looking For Section */}
        <div className="bg-white/40 backdrop-blur-lg rounded-xl p-8 mb-16 hover:shadow-2xl transition-all duration-300 animate-fade-in">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">We're Looking For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Expert in Rust, C, or C++
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Experience with Python, TypeScript, or Swift
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Knowledge of kernel development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Understanding of system architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Security and cryptography expertise
                </li>
              </ul>
            </div>
            <div className="hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">What We Offer</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Equity participation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Remote work flexibility
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Cutting-edge tech exposure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Recognition as a pioneer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Revolutionary project impact
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-indigo-900 mb-6">Ready to Join the Revolution?</h2>
          <p className="text-xl text-indigo-700 mb-8">
            Send us your application with your experience, GitHub profile, and motivation.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Mail className="w-6 h-6 mr-2 animate-bounce" />
            Apply Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-indigo-200 mt-16 py-8 bg-white/30">
        <div className="container mx-auto px-4 text-center text-indigo-700">
          <p>© 2024 IberOS. Join us in revolutionizing operating systems.</p>
        </div>
      </footer>

      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;