import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaBook, FaTimes } from 'react-icons/fa';

const BookItem = ({ title, author, available, cover }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
    >
      <motion.img
        src={cover}
        alt={title}
        className="w-full h-48 object-cover"
        layoutId={`cover-${title}`}
      />
      <motion.div className="p-4">
        <motion.h3 className="text-lg font-semibold text-gray-800">{title}</motion.h3>
        <motion.p className="text-sm text-gray-600">{author}</motion.p>
        <motion.span
          className={`mt-2 inline-block px-2 py-1 rounded-full text-sm ${
            available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {available ? 'Available' : 'Checked Out'}
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 bg-gray-100"
          >
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const OnlineCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Mock data for demonstration
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", available: true, cover: "https://example.com/cover1.jpg" },
    { id: 2, title: "1984", author: "George Orwell", available: false, cover: "https://example.com/cover2.jpg" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", available: true, cover: "https://example.com/cover3.jpg" },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true, cover: "https://example.com/cover4.jpg" },
    { id: 5, title: "Moby Dick", author: "Herman Melville", available: false, cover: "https://example.com/cover5.jpg" },
  ];

  const filteredBooks = books.filter(book => 
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filter === 'all' || (filter === 'available' && book.available) || (filter === 'checkedOut' && !book.available))
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gradient-to-br from-indigo-100 to-purple-100"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-center mb-10 text-indigo-800"
        >
          Explore Our Collection
        </motion.h2>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-col md:flex-row gap-4"
        >
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title or author"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 pl-10"
              />
              <FaSearch className="absolute left-3 top-3 text-indigo-400" />
            </div>
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All Books</option>
            <option value="available">Available</option>
            <option value="checkedOut">Checked Out</option>
          </select>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredBooks.map(book => (
              <BookItem key={book.id} {...book} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBooks.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            No books found matching your search criteria.
          </motion.p>
        )}
      </div>
    </motion.section>
  );
};

export default OnlineCatalog;