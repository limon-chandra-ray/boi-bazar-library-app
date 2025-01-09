import React from 'react';
import { FaBookOpen, FaHandsHelping, FaUsers, FaMobileAlt } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      icon: <FaBookOpen className="w-12 h-12 text-blue-500" />,
      title: "Extensive Book Collection",
      description: "Access thousands of books across various genres, from classic literature to contemporary bestsellers."
    },
    {
      icon: <FaHandsHelping className="w-12 h-12 text-green-500" />,
      title: "Easy Donation Process",
      description: "Contribute to your community by donating books through our simple, user-friendly platform."
    },
    {
      icon: <FaUsers className="w-12 h-12 text-purple-500" />,
      title: "Community Engagement",
      description: "Connect with fellow readers, join book clubs, and participate in literary events."
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-red-500" />,
      title: "Mobile Accessibility",
      description: "Manage your account, borrow, and donate books on-the-go with our mobile-friendly interface."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Our Book Sharing System</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600 leading-relaxed">
            Welcome to our innovative book sharing platform! We're passionate about connecting readers and 
            promoting literacy in our community. Our system makes it easy to borrow, donate, and engage 
            with books and fellow book lovers. Whether you're looking to discover your next great read or 
            share your favorite stories with others, we're here to help.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-4 text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community Today!</h2>
          <p className="text-gray-600 mb-6">
            Start borrowing, donating, and connecting with other book enthusiasts in your area.
          </p>
          <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Mail  Now 
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;