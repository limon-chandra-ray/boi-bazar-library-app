import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const EventCard = ({ title, date, time, location, description }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <h3 className="text-xl font-semibold mb-2 text-indigo-600">{title}</h3>
    <div className="flex items-center text-gray-600 mb-2">
      <FaCalendar className="mr-2" />
      <span>{format(new Date(date), 'MMMM d, yyyy')}</span>
    </div>
    <div className="flex items-center text-gray-600 mb-2">
      <FaClock className="mr-2" />
      <span>{time}</span>
    </div>
    <div className="flex items-center text-gray-600 mb-4">
      <FaMapMarkerAlt className="mr-2" />
      <span>{location}</span>
    </div>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const UpcomingEvents = () => {
  const events = [
    {
      title: "Author Meet & Greet",
      date: "2024-08-15",
      time: "2:00 PM - 4:00 PM",
      location: "Main Hall",
      description: "Meet bestselling author John Doe and get your book signed!"
    },
    {
      title: "Children's Story Time",
      date: "2024-08-20",
      time: "10:00 AM - 11:00 AM",
      location: "Children's Section",
      description: "Interactive storytelling session for kids aged 3-8."
    },
    {
      title: "Book Club Meeting",
      date: "2024-08-25",
      time: "6:00 PM - 7:30 PM",
      location: "Reading Room",
      description: "Join us to discuss this month's book: 'The Great Gatsby'."
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;