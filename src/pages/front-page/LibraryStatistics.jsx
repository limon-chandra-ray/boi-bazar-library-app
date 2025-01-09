import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaBook, FaUser, FaClock, FaBookReader } from 'react-icons/fa';

const StatItem = ({ icon, value, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md text-center"
  >
    {icon}
    <CountUp end={value} duration={2.5} className="text-3xl font-bold text-indigo-600 my-2 block" />
    <span className="text-gray-600">{label}</span>
  </motion.div>
);

const LibraryStatistics = () => {
  const stats = [
    { icon: <FaBook className="text-4xl text-indigo-500 mx-auto" />, value: 50000, label: "Books in Collection" },
    { icon: <FaUser className="text-4xl text-indigo-500 mx-auto" />, value: 10000, label: "Active Members" },
    { icon: <FaClock className="text-4xl text-indigo-500 mx-auto" />, value: 24, label: "Open Hours/Day" },
    { icon: <FaBookReader className="text-4xl text-indigo-500 mx-auto" />, value: 5000, label: "Daily Visitors" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Library at a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibraryStatistics;