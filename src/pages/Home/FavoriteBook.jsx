import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FavoriteBook = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg"
    >
      <motion.div variants={itemVariants} className="md:w-1/2">
        <img
          src="/path/to/library-image.jpg"
          alt="Library Management System"
          className="rounded-lg shadow-md md:w-10/12 object-cover h-[400px]"
        />
      </motion.div>
      <div className="space-y-6 md:w-1/2">
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl my-5 font-bold md:w-3/4 leading-tight text-gray-800">
          Empower Your Community with Our <span className="text-blue-600">Library Management</span> and <span className="text-green-600">Donation System</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="mb-10 text-lg md:w-5/6 text-gray-600">
          Our innovative platform combines efficient library management with a seamless book donation system. Connect readers, support education, and foster a culture of knowledge sharing in your community.
        </motion.p>
        <motion.div variants={containerVariants} className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
            <p className="text-base text-gray-600">Books Managed</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-green-600">5,000+</h3>
            <p className="text-base text-gray-600">Active Users</p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-purple-600">2,000+</h3>
            <p className="text-base text-gray-600">Books Donated</p>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link to="/explore" className="inline-block mt-8">
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md">
              Explore Our System
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FavoriteBook;