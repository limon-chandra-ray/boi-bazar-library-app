
import  { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { FaSearch, FaBook, FaUserFriends, FaCalendarAlt } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

// Import your Lottie animation file
import libraryAnimationData from '../shared/animation.json';

const BannerCard= () => {
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    { icon: <FaBook />, text: 'Vast Collection' },
    { icon: <FaUserFriends />, text: 'Community' },
    { icon: <FaCalendarAlt />, text: 'Events' },
  ];

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: libraryAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 to-indigo-100 text-gray-800">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-indigo-700">
              Your Smart
              <br />
              <span className="text-blue-600">
                <Typewriter
                  words={['Library', 'Learning Hub', 'Community']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-600">
              Discover, borrow, and connect in our digital library ecosystem.
            </p>
            <motion.div 
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="text"
                placeholder="Search for books, authors, or genres..."
                className="w-full py-3 px-4 pr-12 rounded-full border-2 border-blue-300 focus:border-blue-500 focus:outline-none shadow-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
            </motion.div>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 shadow-md">
                Explore Catalog
              </button>
              <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                Join Community
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-indigo-300 opacity-30 rounded-full blur-2xl">
                
            </div> */}
            <Lottie options={lottieOptions} height={300} width={400} />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="bg-white py-12 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">Discover Our Features</h2>
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-indigo-50 rounded-lg shadow-md w-64"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-indigo-500 text-4xl mb-4">{feature.icon}</span>
                <span className="text-xl font-semibold text-gray-800">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BannerCard;