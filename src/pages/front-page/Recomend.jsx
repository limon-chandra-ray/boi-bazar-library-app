import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaBookOpen, FaTimes } from 'react-icons/fa';

const BookRecommendation = ({ title, author, genre, rating, description, cover }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <motion.img
        src={cover}
        alt={title}
        className="w-full h-48 object-cover"
        layoutId={`cover-${title}`}
      />
      <motion.div className="p-4">
        <motion.h3 className="text-xl font-semibold mb-2 text-indigo-600">{title}</motion.h3>
        <motion.p className="text-gray-600 mb-2">{author}</motion.p>
        <motion.div className="flex items-center mb-2">
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{genre}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center text-indigo-600 hover:text-indigo-800"
          onClick={() => setIsOpen(true)}
        >
          <FaBookOpen className="mr-2" />
          Read More
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-lg w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-indigo-600">{title}</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes className="text-gray-500" />
                </motion.button>
              </div>
              <p className="text-gray-700 mb-4">{description}</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
                Add to Reading List
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ReadingRecommendations = () => {
  const [selectedGenre, setSelectedGenre] = useState('all');

  const recommendations = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", genre: "Fiction", rating: 4, description: "A novel about all the choices that go into a life well lived.", cover: "https://example.com/cover1.jpg" },
    { id: 2, title: "Atomic Habits", author: "James Clear", genre: "Self-Help", rating: 5, description: "Tiny Changes, Remarkable Results: An Easy & Proven Way to Build Good Habits & Break Bad Ones.", cover: "https://example.com/cover2.jpg" },
    { id: 3, title: "The Silent Patient", author: "Alex Michaelides", genre: "Thriller", rating: 4, description: "A shocking psychological thriller of a woman's act of violence against her husband.", cover: "https://example.com/cover3.jpg" },
    { id: 4, title: "Educated", author: "Tara Westover", genre: "Memoir", rating: 5, description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.", cover: "https://example.com/cover4.jpg" },
    { id: 5, title: "The Martian", author: "Andy Weir", genre: "Science Fiction", rating: 4, description: "A novel about an astronaut trying to survive on Mars after being accidentally left behind.", cover: "https://example.com/cover5.jpg" },
  ];

  const genres = ['all', ...new Set(recommendations.map(book => book.genre))];

  const filteredRecommendations = selectedGenre === 'all' 
    ? recommendations 
    : recommendations.filter(book => book.genre === selectedGenre);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gradient-to-br from-purple-100 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-center mb-10 text-indigo-800"
        >
          Curated Reading Recommendations
        </motion.h2>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="px-4 py-2 rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredRecommendations.map(book => (
              <BookRecommendation key={book.id} {...book} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredRecommendations.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            No recommendations found for the selected genre.
          </motion.p>
        )}
      </div>
    </motion.section>
  );
};

export default ReadingRecommendations;